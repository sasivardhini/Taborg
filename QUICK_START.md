# Quick Start Guide - Taborg

Get up and running with Taborg in 2 minutes!

---

## 📦 Installation (Development Mode)

### Step 1: Get the Extension

**Option A: Clone from GitHub**
```bash
git clone https://github.com/yourusername/taborg.git
cd taborg
```

**Option B: Download ZIP**
- Download the repository as ZIP
- Extract to a folder on your computer

---

### Step 2: Generate Icons (Optional)

Icons are needed for the extension to display properly.

**Quick Method (Online)**
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icons/icon.svg`
3. Convert to 16x16, 48x48, and 128x128 PNG
4. Save as `icon16.png`, `icon48.png`, `icon128.png` in the `icons/` folder

**Using Node.js (if you have it installed)**
```bash
cd icons
npm install sharp
node generate-icons.js
```

**Skip for Now**
- The extension will work without icons (just won't have an icon in toolbar)
- You can add them later

---

### Step 3: Load in Chrome

1. **Open Chrome Extensions Page**
   - Type `chrome://extensions/` in address bar, OR
   - Click ⋮ menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle switch in top-right corner

3. **Load the Extension**
   - Click **"Load unpacked"** button
   - Navigate to the `Taborg` folder
   - Click **"Select Folder"**

4. **Verify Installation**
   - You should see "Taborg - Tab & Window Organizer" in the list
   - Extension should show as "Enabled"

---

### Step 4: Pin to Toolbar (Recommended)

1. Click the **puzzle icon** 🧩 in Chrome toolbar
2. Find **"Taborg"** in the list
3. Click the **pin icon** 📌 next to it

Now Taborg is always accessible in your toolbar!

---

## 🎮 First Use

### Try These Features:

#### 1. View Your Tabs
- Click the Taborg icon
- See all your open tabs in one view

#### 2. Search for a Tab
- Type in the search box
- Find tabs by title or URL

#### 3. Save a Session
- Click **"Save Session"**
- Give it a name
- Click **"Save"**

#### 4. Create a Tab Group
- Click **"Create Group"**
- Choose tabs and a color
- Name your group
- Click **"Create"**

#### 5. Remove Duplicates
- Open a few duplicate tabs (same URL)
- Click **"Remove Duplicates"**
- Watch duplicates close automatically

---

## ⌨️ Keyboard Shortcuts

Try these shortcuts (you can change them in `chrome://extensions/shortcuts`):

- **Ctrl+Shift+T** (Cmd+Shift+T on Mac) - Open Taborg
- **Ctrl+Shift+S** (Cmd+Shift+S on Mac) - Quick save session
- **Ctrl+Shift+D** (Cmd+Shift+D on Mac) - Remove duplicates

---

## 🐛 Troubleshooting

### Extension Not Loading?

**Check Chrome Version**
```
Chrome menu → Help → About Google Chrome
```
You need Chrome 88 or higher.

**Reload the Extension**
1. Go to `chrome://extensions/`
2. Find Taborg
3. Click the refresh icon 🔄

**Check for Errors**
1. Go to `chrome://extensions/`
2. Find Taborg
3. Click "Errors" if shown
4. Report issues on GitHub

---

### Icons Not Showing?

This is okay for development! The extension works fine without icons. To add them:

1. Follow Step 2 above to generate icons
2. Reload the extension
3. Icons should appear

---

### Features Not Working?

**Check Permissions**
1. Go to `chrome://extensions/`
2. Click "Details" on Taborg
3. Scroll to "Permissions"
4. Verify all permissions are granted

**Clear Extension Data** (if needed)
1. Right-click Taborg icon
2. Click "Inspect popup"
3. Go to Application → Storage → Clear storage
4. Reload extension

---

## 📚 Next Steps

### Learn More
- Read the full [README.md](README.md)
- Check out [CONTRIBUTING.md](CONTRIBUTING.md) if you want to help

### Customize
- Explore all features in the popup
- Try keyboard shortcuts
- Save your first work session

### Share
- Star the project on GitHub ⭐
- Share with friends and colleagues
- Report bugs or request features

---

## 💡 Pro Tips

1. **Daily Routine**: Save your morning work tabs as a session and restore them each day
2. **Project Organization**: Create tab groups for different projects
3. **Memory Management**: Use "Close Inactive" regularly to free up RAM
4. **Quick Access**: Use Ctrl+Shift+T to open Taborg without clicking
5. **Research Helper**: Save research sessions to continue later

---

## ❓ Need Help?

- **Documentation**: Check [README.md](README.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/taborg/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/taborg/discussions)

---

## ✅ Checklist

- [ ] Extension installed in Chrome
- [ ] Developer mode enabled
- [ ] Extension pinned to toolbar
- [ ] Tried opening the popup
- [ ] Saved first session
- [ ] Created first tab group
- [ ] Tested search feature

---

**You're all set! Happy organizing! 🎉**
