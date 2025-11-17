// Taborg - Tab & Window Organizer
// Background Service Worker

// Install event - runs when extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Taborg installed:', details.reason);

  if (details.reason === 'install') {
    // First time installation
    initializeExtension();
  } else if (details.reason === 'update') {
    // Extension updated
    console.log('Taborg updated to version:', chrome.runtime.getManifest().version);
  }
});

// Initialize extension on first install
async function initializeExtension() {
  try {
    // Set default settings
    await chrome.storage.local.set({
      sessions: [],
      settings: {
        autoDetectDuplicates: true,
        warnBeforeClosingMultipleTabs: true,
        defaultSessionIncludeAllWindows: true,
        theme: 'light'
      },
      stats: {
        tabsClosed: 0,
        duplicatesRemoved: 0,
        sessionsSaved: 0,
        sessionsRestored: 0
      }
    });

    // Open welcome page
    chrome.tabs.create({
      url: 'https://github.com/yourusername/taborg'
    });

    console.log('Taborg initialized successfully');
  } catch (error) {
    console.error('Error initializing extension:', error);
  }
}

// Listen for keyboard commands
chrome.commands.onCommand.addListener(async (command) => {
  console.log('Command received:', command);

  try {
    switch (command) {
      case 'save_session':
        await quickSaveSession();
        break;
      case 'close_duplicates':
        await quickCloseDuplicates();
        break;
      default:
        console.log('Unknown command:', command);
    }
  } catch (error) {
    console.error('Error executing command:', error);
  }
});

// Quick save session (keyboard shortcut)
async function quickSaveSession() {
  try {
    const tabs = await chrome.tabs.query({});
    const date = new Date();
    const sessionName = `Quick Save ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const session = {
      name: sessionName,
      timestamp: Date.now(),
      tabs: tabs.map(tab => ({
        url: tab.url,
        title: tab.title,
        favIconUrl: tab.favIconUrl
      }))
    };

    const result = await chrome.storage.local.get(['sessions', 'stats']);
    const sessions = result.sessions || [];
    const stats = result.stats || { sessionsSaved: 0 };

    sessions.unshift(session);
    stats.sessionsSaved++;

    await chrome.storage.local.set({ sessions, stats });

    showNotification('Session Saved', `"${sessionName}" saved with ${tabs.length} tabs`);
  } catch (error) {
    console.error('Error in quick save:', error);
    showNotification('Error', 'Failed to save session');
  }
}

// Quick close duplicates (keyboard shortcut)
async function quickCloseDuplicates() {
  try {
    const tabs = await chrome.tabs.query({});
    const urlMap = new Map();
    const duplicates = [];

    tabs.forEach(tab => {
      const url = tab.url;
      if (urlMap.has(url)) {
        duplicates.push(tab.id);
      } else {
        urlMap.set(url, tab.id);
      }
    });

    if (duplicates.length === 0) {
      showNotification('No Duplicates', 'No duplicate tabs found');
      return;
    }

    await chrome.tabs.remove(duplicates);

    const result = await chrome.storage.local.get(['stats']);
    const stats = result.stats || { duplicatesRemoved: 0 };
    stats.duplicatesRemoved += duplicates.length;
    await chrome.storage.local.set({ stats });

    showNotification('Duplicates Removed', `Closed ${duplicates.length} duplicate tabs`);
  } catch (error) {
    console.error('Error closing duplicates:', error);
    showNotification('Error', 'Failed to close duplicates');
  }
}

// Show notification
function showNotification(title, message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: chrome.runtime.getURL('icons/icon128.png'),
    title: title,
    message: message,
    priority: 1
  });
}

// Listen for tab events to update stats
chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
  try {
    const result = await chrome.storage.local.get(['stats']);
    const stats = result.stats || { tabsClosed: 0 };
    stats.tabsClosed++;
    await chrome.storage.local.set({ stats });
  } catch (error) {
    console.error('Error updating stats:', error);
  }
});

// Context menu integration (optional - for future enhancement)
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'saveTabToSession',
    title: 'Save Tab to Session',
    contexts: ['page']
  });

  chrome.contextMenus.create({
    id: 'addTabToGroup',
    title: 'Add to Tab Group',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'saveTabToSession') {
    // Open popup or handle saving single tab
    chrome.action.openPopup();
  } else if (info.menuItemId === 'addTabToGroup') {
    chrome.action.openPopup();
  }
});

// Periodic cleanup of old sessions (keep last 50)
chrome.alarms.create('cleanupSessions', { periodInMinutes: 1440 }); // Daily

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'cleanupSessions') {
    try {
      const result = await chrome.storage.local.get(['sessions']);
      const sessions = result.sessions || [];

      if (sessions.length > 50) {
        const cleaned = sessions.slice(0, 50);
        await chrome.storage.local.set({ sessions: cleaned });
        console.log(`Cleaned up ${sessions.length - 50} old sessions`);
      }
    } catch (error) {
      console.error('Error cleaning up sessions:', error);
    }
  }
});

// Message handling from popup or other parts of extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request);

  if (request.action === 'getStats') {
    chrome.storage.local.get(['stats']).then(result => {
      sendResponse({ stats: result.stats || {} });
    });
    return true; // Keep channel open for async response
  }

  if (request.action === 'resetStats') {
    chrome.storage.local.set({
      stats: {
        tabsClosed: 0,
        duplicatesRemoved: 0,
        sessionsSaved: 0,
        sessionsRestored: 0
      }
    }).then(() => {
      sendResponse({ success: true });
    });
    return true;
  }
});

// Handle extension icon click analytics (optional)
chrome.action.onClicked.addListener(() => {
  console.log('Extension icon clicked');
});

console.log('Taborg service worker loaded successfully');
