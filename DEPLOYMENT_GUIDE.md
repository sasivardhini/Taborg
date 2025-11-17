# Taborg Deployment Guide

**Complete guide to test, package, and publish your extension**

---

## 📋 Pre-Deployment Checklist

### ✅ Code Complete
- [x] All features implemented
- [x] Error handling in place
- [x] Loading states implemented
- [x] Code commented and documented

### ✅ Documentation Complete
- [x] README.md comprehensive
- [x] PRIVACY.md policy written
- [x] STORE_LISTING.md prepared
- [x] QUICK_START.md guide created
- [x] CONTRIBUTING.md guidelines added
- [x] CHANGELOG.md initiated
- [x] LICENSE file included

### ✅ Assets Ready
- [ ] Icons generated (see step below)
- [ ] Screenshots taken
- [ ] Promotional images created

---

## 🎨 Step 1: Generate Icons

### Option A: Using Node.js (Recommended)

```bash
cd icons
npm install sharp
node generate-icons.js
```

This will create:
- `icon16.png` (16x16)
- `icon48.png` (48x48)
- `icon128.png` (128x128)

### Option B: Online Conversion

1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icons/icon.svg`
3. Set dimensions and convert:
   - 16x16 → save as `icon16.png`
   - 48x48 → save as `icon48.png`
   - 128x128 → save as `icon128.png`
4. Save all to `icons/` folder

### Option C: Use Design Tools

- Figma, Adobe Illustrator, or Inkscape
- Export from `icon.svg` at required sizes
- Save as PNG with transparency

---

## 🧪 Step 2: Test Locally

### Load Extension in Chrome

1. Open Chrome: `chrome://extensions/`
2. Enable **Developer mode** (top-right)
3. Click **Load unpacked**
4. Select the `Taborg` folder
5. Verify extension loads without errors

### Test All Features

**Basic Functionality:**
- [ ] Extension popup opens
- [ ] All tabs are listed
- [ ] Tab count is accurate
- [ ] UI looks correct

**Search:**
- [ ] Search by tab title works
- [ ] Search by URL works
- [ ] Clear search button works
- [ ] Results update in real-time

**Tab Grouping:**
- [ ] Create Group modal opens
- [ ] Can select tabs
- [ ] Can choose colors
- [ ] Group is created successfully
- [ ] Group appears in browser

**Session Management:**
- [ ] Save Session modal opens
- [ ] Can name session
- [ ] Session saves successfully
- [ ] Saved session appears in list
- [ ] Restore session works
- [ ] Tabs open in new window
- [ ] Delete session works

**Duplicate Detection:**
- [ ] Open duplicate tabs
- [ ] Duplicates are detected
- [ ] Duplicates are marked in UI
- [ ] Remove Duplicates button works
- [ ] Correct tabs are closed

**Cleanup:**
- [ ] Close Inactive button works
- [ ] Active tab is preserved
- [ ] Pinned tabs are preserved
- [ ] Confirmation dialog shows

**Keyboard Shortcuts:**
- [ ] Ctrl+Shift+T opens popup
- [ ] Ctrl+Shift+S quick saves
- [ ] Ctrl+Shift+D removes duplicates

**Edge Cases:**
- [ ] Works with 0 tabs
- [ ] Works with 100+ tabs
- [ ] Works across multiple windows
- [ ] Handles special URLs (chrome://, etc.)
- [ ] No console errors

---

## 📸 Step 3: Create Screenshots

### Required Screenshots (5 minimum, 1280x800 or 640x400)

**Screenshot 1: Main Interface**
- Show popup with multiple tabs
- Highlight search bar and quick actions
- Demonstrate clean UI

**Screenshot 2: Session Management**
- Show saved sessions list
- Include timestamps and tab counts
- Show restore/delete buttons

**Screenshot 3: Tab Grouping**
- Show Create Group modal
- Display color options
- Show selected tabs

**Screenshot 4: Duplicate Detection**
- Show tabs with duplicate badges
- Highlight duplicate count
- Show Remove Duplicates button

**Screenshot 5: Search Feature**
- Show search in action
- Display filtered results
- Demonstrate instant search

### How to Take Screenshots

1. **Prepare a good setup**:
   - Open 10-15 varied tabs
   - Include recognizable sites
   - Create some duplicates

2. **Use Chrome DevTools**:
   - Right-click popup → Inspect
   - Resize to 420px width
   - Use screenshot tool (Cmd+Shift+P → "Capture screenshot")

3. **Edit screenshots**:
   - Add arrows or highlights if needed
   - Blur sensitive information
   - Ensure good contrast
   - Save as PNG or JPEG

---

## 📦 Step 4: Package Extension

### Create Distribution Package

```bash
# From project root
cd ..

# Create zip file (exclude development files)
zip -r taborg-v1.0.0.zip Taborg \
  -x "*.git*" \
  -x "*node_modules/*" \
  -x "*.DS_Store" \
  -x "*/.vscode/*"
```

### Verify Package Contents

```bash
# List contents
unzip -l taborg-v1.0.0.zip

# Should include:
# - manifest.json
# - popup/ folder
# - background/ folder
# - icons/ folder (with PNG files!)
# - README.md
# - LICENSE
# - docs/ folder
```

### Package Requirements

- Maximum size: 50 MB (ours is ~100 KB)
- Must include manifest.json
- Must include all referenced files
- Icons must be PNG format
- No external dependencies

---

## 🚀 Step 5: Chrome Web Store Submission

### Prerequisites

1. **Google Account** for Chrome Web Store
2. **Developer Account** ($5 one-time fee)
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   - Pay developer registration fee

3. **Required Materials**:
   - Extension package (ZIP)
   - Screenshots (5 images)
   - Icons (generated PNG files)
   - Store listing text (from STORE_LISTING.md)
   - Privacy policy URL

### Upload Process

1. **Go to Developer Dashboard**
   - https://chrome.google.com/webstore/devconsole

2. **Click "New Item"**

3. **Upload ZIP file**
   - Upload `taborg-v1.0.0.zip`
   - Wait for upload and processing

4. **Fill Store Listing**:

   **Product Details:**
   - Name: `Taborg - Tab & Window Organizer`
   - Summary: (132 chars - see STORE_LISTING.md)
   - Description: (see STORE_LISTING.md detailed description)
   - Category: `Productivity`
   - Language: `English`

   **Graphics:**
   - Icon: Upload icon128.png
   - Screenshots: Upload all 5 screenshots
   - Promotional tile: (optional, 440x280)
   - Marquee promo: (optional, 1400x560)

   **Privacy:**
   - Single purpose: `Tab and window management`
   - Permission justifications: (see STORE_LISTING.md)
   - Privacy policy URL: `https://github.com/[your-username]/taborg/blob/main/docs/PRIVACY.md`
   - Data usage: Select "Does not collect user data"

   **Distribution:**
   - Visibility: `Public`
   - Regions: `All regions` or select specific countries
   - Pricing: `Free`

5. **Submit for Review**
   - Click "Submit for review"
   - Wait for Google review (typically 1-7 days)

---

## 🔄 Step 6: Post-Submission

### During Review

- **Don't make changes** to the submitted version
- **Monitor email** for review status updates
- **Be ready to respond** to reviewer questions

### Possible Outcomes

**✅ Approved**
- Extension goes live immediately
- Users can install from Web Store
- Share your listing URL!

**⚠️ Needs Changes**
- Review feedback carefully
- Make requested changes
- Re-submit

**❌ Rejected**
- Read rejection reason
- Fix issues
- Appeal if necessary

---

## 📈 Step 7: Post-Launch

### Share Your Extension

- [ ] Share on social media
- [ ] Post on Reddit (r/chrome, r/productivity)
- [ ] Share on ProductHunt
- [ ] Post on Hacker News
- [ ] Share in developer communities

### Monitor Performance

**Chrome Web Store Dashboard:**
- Installs and uninstalls
- User reviews
- Weekly active users
- Crash reports

**Respond to Users:**
- Reply to reviews (good and bad)
- Fix reported bugs
- Consider feature requests

### Marketing Ideas

1. **Blog post** about creating the extension
2. **Video demo** on YouTube
3. **Tweet thread** with screenshots
4. **GitHub repository** README badges
5. **Dev.to article** technical deep-dive

---

## 🔄 Future Updates

### Making Updates

1. **Update version in manifest.json**:
   ```json
   "version": "1.1.0"
   ```

2. **Update CHANGELOG.md**:
   ```markdown
   ## [1.1.0] - 2025-12-01
   ### Added
   - New feature X
   ### Fixed
   - Bug Y
   ```

3. **Test thoroughly**

4. **Create new ZIP package**

5. **Upload to Web Store**:
   - Go to dashboard
   - Click your extension
   - Click "Package" → "Upload new package"
   - Submit for review

### Version Numbering

- **Major (2.0.0)**: Breaking changes, complete rewrites
- **Minor (1.1.0)**: New features, non-breaking changes
- **Patch (1.0.1)**: Bug fixes only

---

## 🌐 Edge Add-ons (Optional)

Microsoft Edge uses the same extension format!

1. Go to [Edge Add-ons Dashboard](https://partner.microsoft.com/dashboard/microsoftedge)
2. Upload same ZIP package
3. Fill similar store listing
4. Submit for review

Same process, different store. Double your reach!

---

## ✅ Final Checklist

### Before Submission
- [ ] All features tested and working
- [ ] No console errors
- [ ] Icons generated (PNG format)
- [ ] Screenshots taken (5 minimum)
- [ ] Store listing text prepared
- [ ] Privacy policy accessible online
- [ ] Version number correct in manifest
- [ ] ZIP package created and verified
- [ ] Chrome Web Store developer account ready

### After Approval
- [ ] Extension live in store
- [ ] Listing URL saved
- [ ] Share announcement
- [ ] Monitor initial reviews
- [ ] Plan next version features

---

## 📞 Need Help?

**Chrome Web Store:**
- [Developer Documentation](https://developer.chrome.com/docs/webstore/)
- [Support Forum](https://support.google.com/chrome_webstore/)

**Taborg Specific:**
- [GitHub Issues](https://github.com/yourusername/taborg/issues)
- [GitHub Discussions](https://github.com/yourusername/taborg/discussions)

---

## 🎉 You're Ready!

Your extension is production-ready. Follow these steps and you'll be live on the Chrome Web Store soon!

**Good luck with your launch! 🚀**
