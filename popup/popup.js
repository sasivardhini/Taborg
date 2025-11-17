// Taborg - Tab & Window Organizer
// Popup UI Controller

class TaborgUI {
  constructor() {
    this.tabs = [];
    this.sessions = [];
    this.selectedColor = 'red';
    this.selectedTabIds = new Set();
    this.duplicates = new Set();
    this.init();
  }

  async init() {
    await this.loadTabs();
    await this.loadSessions();
    this.setupEventListeners();
    this.detectDuplicates();
    this.updateStats();
  }

  // Load all tabs from all windows
  async loadTabs() {
    try {
      this.tabs = await chrome.tabs.query({});
      this.renderTabs(this.tabs);
      this.updateTabCount();
    } catch (error) {
      console.error('Error loading tabs:', error);
      this.showNotification('Failed to load tabs', 'error');
    }
  }

  // Load saved sessions from storage
  async loadSessions() {
    try {
      const result = await chrome.storage.local.get(['sessions']);
      this.sessions = result.sessions || [];
      this.renderSessions();
      this.updateStats();
    } catch (error) {
      console.error('Error loading sessions:', error);
    }
  }

  // Render tabs in the UI
  renderTabs(tabs) {
    const tabList = document.getElementById('tabList');

    if (tabs.length === 0) {
      tabList.innerHTML = `
        <div class="empty-state">
          <p>No tabs found</p>
          <span>Open some tabs to get started</span>
        </div>
      `;
      return;
    }

    tabList.innerHTML = tabs.map(tab => {
      const isActive = tab.active;
      const isDuplicate = this.duplicates.has(tab.id);
      const favicon = tab.favIconUrl || '';
      const url = new URL(tab.url || 'about:blank');
      const domain = url.hostname || 'New Tab';

      return `
        <div class="tab-item ${isDuplicate ? 'duplicate' : ''} ${!isActive ? 'inactive' : ''}"
             data-tab-id="${tab.id}">
          ${favicon ?
            `<img src="${favicon}" class="tab-favicon" onerror="this.className='tab-favicon default'; this.innerHTML='🌐'">` :
            `<div class="tab-favicon default">🌐</div>`
          }
          <div class="tab-info">
            <div class="tab-title">${this.escapeHtml(tab.title || 'Untitled')}</div>
            <div class="tab-url">${this.escapeHtml(domain)}</div>
          </div>
          ${isActive ? '<span class="tab-badge active">Active</span>' : ''}
          ${isDuplicate ? '<span class="tab-badge duplicate">Dup</span>' : ''}
          <button class="tab-close" data-tab-id="${tab.id}" title="Close tab">×</button>
        </div>
      `;
    }).join('');

    // Add click listeners to tabs
    tabList.querySelectorAll('.tab-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-close')) {
          const tabId = parseInt(item.dataset.tabId);
          this.switchToTab(tabId);
        }
      });
    });

    // Add click listeners to close buttons
    tabList.querySelectorAll('.tab-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabId = parseInt(btn.dataset.tabId);
        this.closeTab(tabId);
      });
    });
  }

  // Render saved sessions
  renderSessions() {
    const sessionList = document.getElementById('sessionList');
    const sessionCount = document.getElementById('sessionCount');

    sessionCount.textContent = this.sessions.length;

    if (this.sessions.length === 0) {
      sessionList.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2" opacity="0.3"/>
            <path d="M24 16v16M16 24h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p>No saved sessions yet</p>
          <span>Click "Save Session" to get started</span>
        </div>
      `;
      return;
    }

    sessionList.innerHTML = this.sessions.map((session, index) => {
      const date = new Date(session.timestamp);
      const formattedDate = this.formatDate(date);
      const tabCount = session.tabs.length;

      return `
        <div class="session-item" data-session-index="${index}">
          <div class="session-header">
            <div class="session-name">${this.escapeHtml(session.name)}</div>
            <div class="session-actions">
              <button class="session-btn restore" data-action="restore" data-index="${index}">
                Restore
              </button>
              <button class="session-btn delete" data-action="delete" data-index="${index}">
                Delete
              </button>
            </div>
          </div>
          <div class="session-meta">
            <span>📑 ${tabCount} tab${tabCount !== 1 ? 's' : ''}</span>
            <span>📅 ${formattedDate}</span>
          </div>
        </div>
      `;
    }).join('');

    // Add event listeners to session buttons
    sessionList.querySelectorAll('.session-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        const index = parseInt(btn.dataset.index);

        if (action === 'restore') {
          this.restoreSession(index);
        } else if (action === 'delete') {
          this.deleteSession(index);
        }
      });
    });
  }

  // Setup all event listeners
  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      clearSearch.classList.toggle('hidden', !query);
      this.filterTabs(query);
    });

    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      clearSearch.classList.add('hidden');
      this.renderTabs(this.tabs);
    });

    // Quick actions
    document.getElementById('saveSession').addEventListener('click', () => {
      this.openSaveModal();
    });

    document.getElementById('removeDuplicates').addEventListener('click', () => {
      this.removeDuplicates();
    });

    document.getElementById('closeInactive').addEventListener('click', () => {
      this.closeInactiveTabs();
    });

    document.getElementById('createGroup').addEventListener('click', () => {
      this.openGroupModal();
    });

    // Save session modal
    document.getElementById('closeModal').addEventListener('click', () => {
      this.closeSaveModal();
    });

    document.getElementById('cancelSave').addEventListener('click', () => {
      this.closeSaveModal();
    });

    document.getElementById('confirmSave').addEventListener('click', () => {
      this.saveSession();
    });

    // Group modal
    document.getElementById('closeGroupModal').addEventListener('click', () => {
      this.closeGroupModal();
    });

    document.getElementById('cancelGroup').addEventListener('click', () => {
      this.closeGroupModal();
    });

    document.getElementById('confirmGroup').addEventListener('click', () => {
      this.createGroup();
    });

    // Color picker
    document.querySelectorAll('.color-option').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedColor = btn.dataset.color;
      });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'f') {
          e.preventDefault();
          searchInput.focus();
        }
      }
    });
  }

  // Filter tabs based on search query
  filterTabs(query) {
    if (!query) {
      this.renderTabs(this.tabs);
      return;
    }

    const filtered = this.tabs.filter(tab => {
      const title = (tab.title || '').toLowerCase();
      const url = (tab.url || '').toLowerCase();
      return title.includes(query) || url.includes(query);
    });

    this.renderTabs(filtered);
  }

  // Detect duplicate tabs
  detectDuplicates() {
    const urlMap = new Map();
    this.duplicates.clear();

    this.tabs.forEach(tab => {
      const url = tab.url;
      if (urlMap.has(url)) {
        urlMap.get(url).push(tab.id);
      } else {
        urlMap.set(url, [tab.id]);
      }
    });

    urlMap.forEach(ids => {
      if (ids.length > 1) {
        // Mark all but the first as duplicates
        ids.slice(1).forEach(id => this.duplicates.add(id));
      }
    });

    document.getElementById('duplicateCount').textContent = this.duplicates.size;
  }

  // Remove duplicate tabs
  async removeDuplicates() {
    if (this.duplicates.size === 0) {
      this.showNotification('No duplicate tabs found', 'warning');
      return;
    }

    try {
      const duplicateIds = Array.from(this.duplicates);
      await chrome.tabs.remove(duplicateIds);
      this.showNotification(`Removed ${duplicateIds.length} duplicate tabs`, 'success');
      await this.loadTabs();
      this.detectDuplicates();
    } catch (error) {
      console.error('Error removing duplicates:', error);
      this.showNotification('Failed to remove duplicates', 'error');
    }
  }

  // Close inactive tabs
  async closeInactiveTabs() {
    const inactiveTabs = this.tabs.filter(tab => !tab.active && !tab.pinned);

    if (inactiveTabs.length === 0) {
      this.showNotification('No inactive tabs to close', 'warning');
      return;
    }

    if (!confirm(`Close ${inactiveTabs.length} inactive tabs?`)) {
      return;
    }

    try {
      const tabIds = inactiveTabs.map(tab => tab.id);
      await chrome.tabs.remove(tabIds);
      this.showNotification(`Closed ${tabIds.length} inactive tabs`, 'success');
      await this.loadTabs();
    } catch (error) {
      console.error('Error closing inactive tabs:', error);
      this.showNotification('Failed to close inactive tabs', 'error');
    }
  }

  // Switch to a specific tab
  async switchToTab(tabId) {
    try {
      const tab = await chrome.tabs.get(tabId);
      await chrome.tabs.update(tabId, { active: true });
      await chrome.windows.update(tab.windowId, { focused: true });
      window.close();
    } catch (error) {
      console.error('Error switching to tab:', error);
      this.showNotification('Failed to switch to tab', 'error');
    }
  }

  // Close a specific tab
  async closeTab(tabId) {
    try {
      await chrome.tabs.remove(tabId);
      await this.loadTabs();
      this.detectDuplicates();
    } catch (error) {
      console.error('Error closing tab:', error);
      this.showNotification('Failed to close tab', 'error');
    }
  }

  // Open save session modal
  openSaveModal() {
    const modal = document.getElementById('saveModal');
    const input = document.getElementById('sessionName');
    const date = new Date();
    const defaultName = `Session ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    input.value = defaultName;
    modal.classList.remove('hidden');
    input.focus();
    input.select();
  }

  // Close save session modal
  closeSaveModal() {
    document.getElementById('saveModal').classList.add('hidden');
  }

  // Save current session
  async saveSession() {
    const name = document.getElementById('sessionName').value.trim();
    const includeAllWindows = document.getElementById('includeAllWindows').checked;
    const closeTabs = document.getElementById('closeTabs').checked;

    if (!name) {
      this.showNotification('Please enter a session name', 'warning');
      return;
    }

    try {
      let tabs;
      if (includeAllWindows) {
        tabs = await chrome.tabs.query({});
      } else {
        const currentWindow = await chrome.windows.getCurrent();
        tabs = await chrome.tabs.query({ windowId: currentWindow.id });
      }

      const session = {
        name,
        timestamp: Date.now(),
        tabs: tabs.map(tab => ({
          url: tab.url,
          title: tab.title,
          favIconUrl: tab.favIconUrl
        }))
      };

      this.sessions.unshift(session);
      await chrome.storage.local.set({ sessions: this.sessions });

      if (closeTabs) {
        const tabIds = tabs.filter(tab => !tab.pinned).map(tab => tab.id);
        await chrome.tabs.remove(tabIds);
      }

      this.closeSaveModal();
      this.renderSessions();
      this.showNotification(`Session "${name}" saved successfully`, 'success');

      if (closeTabs) {
        await this.loadTabs();
      }
    } catch (error) {
      console.error('Error saving session:', error);
      this.showNotification('Failed to save session', 'error');
    }
  }

  // Restore a saved session
  async restoreSession(index) {
    const session = this.sessions[index];

    if (!session) {
      this.showNotification('Session not found', 'error');
      return;
    }

    try {
      const urls = session.tabs.map(tab => tab.url).filter(url => url && !url.startsWith('chrome://'));

      if (urls.length === 0) {
        this.showNotification('No valid URLs to restore', 'warning');
        return;
      }

      await chrome.windows.create({ url: urls });
      this.showNotification(`Restored session "${session.name}"`, 'success');
      window.close();
    } catch (error) {
      console.error('Error restoring session:', error);
      this.showNotification('Failed to restore session', 'error');
    }
  }

  // Delete a saved session
  async deleteSession(index) {
    const session = this.sessions[index];

    if (!confirm(`Delete session "${session.name}"?`)) {
      return;
    }

    try {
      this.sessions.splice(index, 1);
      await chrome.storage.local.set({ sessions: this.sessions });
      this.renderSessions();
      this.showNotification('Session deleted', 'success');
      this.updateStats();
    } catch (error) {
      console.error('Error deleting session:', error);
      this.showNotification('Failed to delete session', 'error');
    }
  }

  // Open group modal
  async openGroupModal() {
    const modal = document.getElementById('groupModal');
    const tabSelection = document.getElementById('tabSelection');

    // Get current window tabs for grouping
    const currentWindow = await chrome.windows.getCurrent();
    const windowTabs = await chrome.tabs.query({ windowId: currentWindow.id });

    tabSelection.innerHTML = windowTabs.map(tab => {
      const favicon = tab.favIconUrl || '';
      return `
        <div class="tab-selection-item">
          <input type="checkbox" value="${tab.id}" ${!tab.pinned ? 'checked' : ''}>
          ${favicon ?
            `<img src="${favicon}" class="tab-favicon" onerror="this.className='tab-favicon default'; this.innerHTML='🌐'">` :
            `<div class="tab-favicon default">🌐</div>`
          }
          <div class="tab-info">
            <div class="tab-title">${this.escapeHtml(tab.title || 'Untitled')}</div>
          </div>
        </div>
      `;
    }).join('');

    modal.classList.remove('hidden');
    document.getElementById('groupName').focus();
  }

  // Close group modal
  closeGroupModal() {
    document.getElementById('groupModal').classList.add('hidden');
  }

  // Create tab group
  async createGroup() {
    const name = document.getElementById('groupName').value.trim();
    const selectedCheckboxes = document.querySelectorAll('#tabSelection input[type="checkbox"]:checked');
    const tabIds = Array.from(selectedCheckboxes).map(cb => parseInt(cb.value));

    if (!name) {
      this.showNotification('Please enter a group name', 'warning');
      return;
    }

    if (tabIds.length === 0) {
      this.showNotification('Please select at least one tab', 'warning');
      return;
    }

    try {
      const groupId = await chrome.tabs.group({ tabIds });
      await chrome.tabGroups.update(groupId, {
        title: name,
        color: this.selectedColor
      });

      this.closeGroupModal();
      this.showNotification(`Group "${name}" created with ${tabIds.length} tabs`, 'success');
      await this.loadTabs();
    } catch (error) {
      console.error('Error creating group:', error);
      this.showNotification('Failed to create group', 'error');
    }
  }

  // Update tab count
  updateTabCount() {
    document.getElementById('tabCount').textContent = this.tabs.length;
  }

  // Update statistics
  updateStats() {
    document.getElementById('savedSessionCount').textContent = this.sessions.length;
  }

  // Show notification
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // Utility: Format date
  formatDate(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  }

  // Utility: Escape HTML
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize the UI when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new TaborgUI();
});
