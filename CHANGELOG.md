# Changelog

All notable changes to Taborg will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-17

### 🎉 Initial Release

#### Added
- **Tab Grouping**: Create color-coded tab groups with custom names
- **Session Management**: Save and restore browsing sessions
  - Save current window or all windows
  - Optional: Close tabs after saving
  - Restore sessions to new window
- **Duplicate Detection**: Automatically detect and highlight duplicate tabs
- **Smart Search**: Real-time tab search by title or URL
- **Quick Actions**:
  - One-click duplicate removal
  - Close inactive tabs
  - Quick session save
- **Keyboard Shortcuts**:
  - `Ctrl+Shift+T`: Open Taborg
  - `Ctrl+Shift+S`: Quick save session
  - `Ctrl+Shift+D`: Remove duplicates
- **Statistics Tracking**:
  - Tabs closed count
  - Duplicates removed count
  - Sessions saved count
- **Modern UI**:
  - Clean, professional interface
  - Smooth animations
  - Responsive design
  - Color-coded badges
- **Privacy Features**:
  - 100% local storage
  - No tracking or analytics
  - No external servers
- **Multi-window Support**: Manage tabs across multiple browser windows
- **Context Menu Integration**: Right-click actions for tabs

#### Technical
- Built with Manifest V3
- Service worker architecture
- Chrome Storage API for local data
- TabGroups API integration
- Notifications API for user feedback

### Security
- All data stored locally using Chrome's secure storage
- No external network requests
- No third-party dependencies
- Open source for transparency

---

## [Unreleased]

### Planned Features
- Cloud sync across devices (opt-in)
- Tab suspend for memory management
- Dark mode theme
- Session templates
- Export/import sessions as JSON
- Advanced analytics dashboard
- Firefox and Edge optimization
- Customizable keyboard shortcuts
- Tab auto-grouping based on domain
- Session scheduling (auto-restore at specific times)

---

## Version History

### Release Types
- **Major (x.0.0)**: Breaking changes, major features
- **Minor (1.x.0)**: New features, non-breaking changes
- **Patch (1.0.x)**: Bug fixes, small improvements

### Support Policy
- Latest version always supported
- Security patches for previous major version
- Bug reports welcome for all versions

---

[1.0.0]: https://github.com/yourusername/taborg/releases/tag/v1.0.0
