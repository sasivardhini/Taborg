# 🗂️ Taborg - Tab & Window Organizer

**Professional tab management for Chrome, Edge, and Chromium-based browsers**

Boost your productivity and keep your browser organized with Taborg - a powerful, modern tab and window management extension that helps you group, save, and manage your tabs effortlessly.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://chrome.google.com/webstore)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](manifest.json)

---

## ✨ Features

### 🎯 Core Features

- **🗂️ Tab Grouping & Labeling** - Organize tabs into color-coded groups with custom names
- **💾 Session Save & Restore** - Save your current browsing session and restore it anytime
- **🔍 Smart Tab Search** - Instantly find any tab by title or URL
- **🔄 Duplicate Detection** - Automatically detect and remove duplicate tabs
- **🧹 One-Click Cleanup** - Close inactive tabs with a single click
- **⚡ Keyboard Shortcuts** - Navigate and manage tabs without leaving your keyboard
- **📊 Usage Statistics** - Track tabs closed, duplicates removed, and sessions saved

### 🚀 Advanced Features

- **Multi-Window Support** - Manage tabs across multiple browser windows
- **Auto-Save Sessions** - Quick save with keyboard shortcuts (Ctrl+Shift+S)
- **Smart Notifications** - Get notified when actions complete
- **Beautiful UI** - Modern, clean interface with smooth animations
- **Local Storage** - All data stored locally on your device (privacy-first)
- **Context Menus** - Right-click integration for quick actions

---

## 📦 Installation

### From Source (Development)

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/taborg.git
   cd taborg
   ```

2. **Generate icons (optional)**
   ```bash
   # If you have Node.js and want to generate PNGs from SVG
   cd icons
   npm install sharp
   node generate-icons.js
   ```

3. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in top-right corner)
   - Click **Load unpacked**
   - Select the `Taborg` folder

4. **Pin the extension** (recommended)
   - Click the puzzle icon in Chrome toolbar
   - Find "Taborg" and click the pin icon

### From Chrome Web Store (Coming Soon)

Once published, you'll be able to install directly from:
- [Chrome Web Store](#) (link coming soon)
- [Edge Add-ons](#) (link coming soon)

---

## 🎮 Usage

### Quick Start

1. **Click the Taborg icon** in your browser toolbar
2. Browse your current tabs in a clean, organized view
3. Use the **search bar** to find specific tabs
4. Click **Save Session** to save your current tabs for later
5. Click **Remove Duplicates** to close duplicate tabs
6. Click **Create Group** to organize selected tabs

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+T` (Windows/Linux)<br>`Cmd+Shift+T` (Mac) | Open Taborg |
| `Ctrl+Shift+S` (Windows/Linux)<br>`Cmd+Shift+S` (Mac) | Quick save session |
| `Ctrl+Shift+D` (Windows/Linux)<br>`Cmd+Shift+D` (Mac) | Close duplicate tabs |
| `Ctrl+F` | Focus search bar (when popup is open) |

### Features Walkthrough

#### 📁 Tab Grouping

1. Click **Create Group**
2. Enter a group name
3. Choose a color
4. Select tabs to include
5. Click **Create Group**

Your tabs will be grouped together in the browser with the chosen color and name.

#### 💾 Save & Restore Sessions

**Save a Session:**
1. Click **Save Session**
2. Enter a session name (or use the default)
3. Choose options:
   - Include all windows or just current window
   - Close tabs after saving (optional)
4. Click **Save Session**

**Restore a Session:**
1. Find the session in "Saved Sessions"
2. Click **Restore**
3. All tabs open in a new window

#### 🔍 Search Tabs

Simply type in the search bar at the top:
- Search by **page title**
- Search by **URL or domain**
- Results filter in real-time

#### 🧹 Cleanup Tools

**Remove Duplicates:**
- Automatically detects tabs with identical URLs
- Shows duplicate count in footer
- One click removes all duplicates

**Close Inactive Tabs:**
- Closes all tabs except the active one
- Protects pinned tabs automatically
- Confirms before closing

---

## 🔒 Privacy & Security

Taborg takes your privacy seriously:

- ✅ **100% Local Storage** - All data stored on your device
- ✅ **No Cloud Sync** - No data sent to external servers
- ✅ **No Analytics** - No tracking or telemetry
- ✅ **No Ads** - Completely ad-free
- ✅ **Open Source** - Full transparency of code

### Permissions Explained

| Permission | Why We Need It |
|------------|----------------|
| `tabs` | Read and manage your browser tabs |
| `storage` | Save sessions and settings locally |
| `tabGroups` | Create and manage tab groups |
| `<all_urls>` | Access favicon and page titles for display |

---

## 🛠️ Development

### Project Structure

```
Taborg/
├── manifest.json          # Extension configuration (Manifest V3)
├── popup/
│   ├── popup.html        # Main UI interface
│   ├── popup.css         # Styling
│   └── popup.js          # UI logic and tab management
├── background/
│   └── service-worker.js # Background tasks and keyboard shortcuts
├── icons/
│   ├── icon16.png        # Toolbar icon
│   ├── icon48.png        # Extension management icon
│   ├── icon128.png       # Web Store icon
│   ├── icon.svg          # Source SVG file
│   └── generate-icons.js # Icon generator script
├── docs/
│   ├── PRIVACY.md        # Privacy policy
│   └── STORE_LISTING.md  # Chrome Web Store description
└── README.md             # This file
```

### Technology Stack

- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No frameworks, pure JS for performance
- **CSS3** - Modern styling with gradients and animations
- **Chrome APIs** - Tabs API, Storage API, TabGroups API
- **Service Workers** - Background processing

### Building for Production

1. **Test thoroughly**
   ```bash
   # Load extension in Chrome with Developer mode
   # Test all features
   # Check console for errors
   ```

2. **Update version**
   ```json
   // In manifest.json
   "version": "1.0.0"
   ```

3. **Create icons** (if not already done)
   ```bash
   cd icons
   node generate-icons.js
   ```

4. **Zip the extension**
   ```bash
   # Exclude unnecessary files
   zip -r taborg-v1.0.0.zip . -x "*.git*" "*.DS_Store" "node_modules/*"
   ```

5. **Upload to Chrome Web Store**
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   - Upload the ZIP file
   - Fill in store listing details
   - Submit for review

---

## 🗺️ Roadmap

### Version 1.0 (Current - MVP)
- [x] Tab grouping and labeling
- [x] Session save and restore
- [x] Duplicate tab detection
- [x] Tab search functionality
- [x] One-click cleanup
- [x] Keyboard shortcuts
- [x] Local storage

### Version 1.1 (Planned)
- [ ] Cloud sync across devices (Firebase)
- [ ] Tab suspend for memory saving
- [ ] Tab timers and auto-sleep
- [ ] Import/Export sessions as JSON
- [ ] Dark mode support
- [ ] Session templates

### Version 2.0 (Future)
- [ ] AI-powered tab suggestions
- [ ] Productivity analytics dashboard
- [ ] Team collaboration (share sessions)
- [ ] Browser history integration
- [ ] Customizable themes
- [ ] Firefox and Safari support

---

## 💡 Tips & Tricks

1. **Use keyboard shortcuts** for faster workflow
2. **Pin important tabs** before cleanup to protect them
3. **Name sessions descriptively** for easy identification later
4. **Create groups by project** to stay organized
5. **Regular cleanup** keeps your browser fast and organized

---

## 🐛 Troubleshooting

### Extension not working?

1. **Check Chrome version** - Requires Chrome 88 or higher
2. **Reload the extension** - Go to `chrome://extensions` and click reload
3. **Check permissions** - Ensure all permissions are granted
4. **Clear cache** - Sometimes helps with storage issues

### Tabs not grouping?

- Tab groups API requires Chrome 88+
- Some special tabs (chrome://, chrome-extension://) cannot be grouped

### Sessions not saving?

- Check browser storage permissions
- Clear old sessions if you have 50+ saved
- Restart browser if issues persist

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report bugs** - Open an issue with details
2. **Suggest features** - Share your ideas
3. **Submit pull requests** - Improve the code
4. **Spread the word** - Share with friends and colleagues

### Development Guidelines

- Follow existing code style
- Test changes thoroughly
- Update documentation as needed
- Keep commits atomic and descriptive

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 👏 Acknowledgments

- Built with ❤️ for productivity enthusiasts
- Inspired by the need for better tab management
- Thanks to the Chrome Extensions community

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/taborg/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/taborg/discussions)
- **Email**: support@taborg.app (coming soon)

---

## ⭐ Star History

If you find Taborg useful, please consider giving it a star on GitHub!

---

<div align="center">
  <strong>Made with 💜 by the Taborg Team</strong>
  <br>
  <sub>Organize tabs. Boost productivity. Stay focused.</sub>
</div>
