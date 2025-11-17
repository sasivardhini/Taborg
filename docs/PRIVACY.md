# Privacy Policy for Taborg - Tab & Window Organizer

**Last Updated: November 17, 2025**

## Overview

Taborg ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains how Taborg handles your data when you use our browser extension.

## TL;DR (Summary)

- ✅ **We do NOT collect any personal data**
- ✅ **We do NOT track your browsing history**
- ✅ **We do NOT sell or share your data**
- ✅ **All data stays on YOUR device**
- ✅ **No analytics, no ads, no external servers**

---

## Data Collection & Usage

### What Data We Access

Taborg requires certain permissions to function. Here's exactly what we access and why:

#### 1. **Tabs Permission**
- **What it does**: Allows reading tab titles, URLs, and favicons
- **Why we need it**: To display your tabs in the extension interface
- **What we do with it**: Display in the popup UI only
- **Stored locally**: No, only accessed in real-time
- **Sent externally**: Never

#### 2. **Storage Permission**
- **What it does**: Allows saving data to your browser's local storage
- **Why we need it**: To save your sessions and preferences
- **What we store**:
  - Saved sessions (tab URLs, titles, favicons)
  - Extension settings (preferences)
  - Usage statistics (tabs closed count, etc.)
- **Stored locally**: Yes, on your device only
- **Sent externally**: Never

#### 3. **TabGroups Permission**
- **What it does**: Allows creating and managing tab groups
- **Why we need it**: To enable the tab grouping feature
- **What we do with it**: Create groups when you click "Create Group"
- **Stored locally**: Chrome handles this natively
- **Sent externally**: Never

#### 4. **Host Permissions (`<all_urls>`)**
- **What it does**: Allows accessing page information from any website
- **Why we need it**: To read tab titles and favicons for display
- **What we do with it**: Display favicon images and page titles
- **Stored locally**: Only when you save a session
- **Sent externally**: Never

### What Data We Store Locally

All data is stored in your browser's local storage using the Chrome Storage API:

1. **Saved Sessions**
   - Tab URLs
   - Tab titles
   - Favicon URLs
   - Timestamp of when session was saved
   - Session name (chosen by you)

2. **Settings**
   - User preferences (optional features on/off)
   - Theme preferences (if applicable)

3. **Statistics** (optional)
   - Number of tabs closed
   - Number of sessions saved
   - Number of duplicates removed
   - *These are stored locally for your information only*

### What Data We Do NOT Collect

- ❌ **No browsing history** - We don't record what sites you visit
- ❌ **No personal information** - No names, emails, or identifiers
- ❌ **No tracking cookies** - We don't use cookies or tracking pixels
- ❌ **No analytics** - No Google Analytics or similar services
- ❌ **No crash reports** - No automatic error reporting
- ❌ **No form data** - We never access what you type on websites
- ❌ **No passwords** - We cannot access your passwords or credentials

---

## Data Storage & Security

### Where Your Data Lives

- **100% Local Storage**: All data is stored using Chrome's `chrome.storage.local` API
- **Your Device Only**: Data never leaves your computer
- **No Cloud Sync**: Currently, there is no cloud sync feature (may be added in future versions with explicit opt-in)
- **No External Servers**: We do not operate any servers or databases

### Data Security

- Data is stored using Chrome's secure storage API
- Access is restricted to the Taborg extension only
- Data is automatically encrypted by Chrome's storage system
- You can delete all data at any time by removing the extension

### Data Retention

- **Sessions**: Stored until you manually delete them
- **Settings**: Stored until you remove the extension
- **Statistics**: Stored until you reset them or remove the extension

---

## Third-Party Services

### We Do NOT Use:
- ❌ Google Analytics
- ❌ Facebook Pixel
- ❌ Ad networks
- ❌ Crash reporting services (Sentry, Bugsnag, etc.)
- ❌ Cloud storage providers
- ❌ Any external APIs or services

### External Resources:
- **Favicons**: When displaying tab favicons, these images are loaded from the original websites (not from us)
- **Chrome APIs**: We only use official Chrome Extension APIs provided by Google

---

## Your Rights & Control

### You Have Full Control:

1. **View Your Data**
   - Open Chrome DevTools on the extension popup
   - Go to Application → Storage → Local Storage
   - See exactly what data is stored

2. **Delete Your Data**
   - **Individual sessions**: Click "Delete" on any session
   - **All data**: Remove the extension from `chrome://extensions`

3. **Export Your Data** (Future Feature)
   - Planned feature to export sessions as JSON

4. **No Account Required**
   - No sign-up, no login, no account needed

---

## Children's Privacy

Taborg does not knowingly collect any information from anyone, including children under 13. The extension does not require age verification because no data is collected or transmitted.

---

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify users of any material changes by:
- Updating the "Last Updated" date at the top
- Showing a notification in the extension (for major changes)
- Posting an update on our GitHub repository

Continued use of the extension after changes constitutes acceptance of the updated policy.

---

## Open Source Transparency

Taborg is open source. You can:
- View the complete source code on GitHub
- Verify that we do what we say
- Audit the code for security and privacy
- Contribute improvements

**GitHub Repository**: https://github.com/yourusername/taborg

---

## Compliance

### GDPR Compliance (European Users)

Under GDPR, you have the right to:
- **Access**: See what data we have (stored locally on your device)
- **Deletion**: Delete all data (remove the extension)
- **Portability**: Export your data (planned feature)
- **Object**: Stop data processing (remove the extension)

Since all data is stored locally and we don't collect personal data, most GDPR concerns don't apply.

### CCPA Compliance (California Users)

Under CCPA:
- We do **NOT sell** your personal information
- We do **NOT share** your personal information
- We do **NOT collect** personal information for commercial purposes

---

## Contact Us

If you have questions about this Privacy Policy or data practices:

- **GitHub Issues**: [Report a privacy concern](https://github.com/yourusername/taborg/issues)
- **Email**: privacy@taborg.app (coming soon)

---

## Summary

**In plain English:**

Taborg helps you organize your browser tabs. To do this, we need to see your open tabs and store your saved sessions. Everything stays on your computer. We don't send anything anywhere. We don't track you. We don't sell your data. We're here to help you be more productive, that's it.

---

<div align="center">
  <strong>Your privacy matters. Always.</strong>
  <br>
  <sub>Taborg Team</sub>
</div>
