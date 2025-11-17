# Contributing to Taborg

Thank you for your interest in contributing to Taborg! 🎉

We welcome contributions from everyone. This document provides guidelines to help you get started.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Expected Behavior

- Be respectful and inclusive
- Welcome newcomers
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

---

## 🤝 How Can I Contribute?

### 1. Report Bugs

Found a bug? Please [open an issue](https://github.com/yourusername/taborg/issues/new) with:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Chrome version and OS
- Screenshots if applicable

### 2. Suggest Features

Have an idea? [Open a feature request](https://github.com/yourusername/taborg/issues/new) with:
- Clear description of the feature
- Use cases and benefits
- Mockups or examples (if applicable)

### 3. Improve Documentation

- Fix typos or clarify instructions
- Add examples or tutorials
- Translate documentation
- Improve README or guides

### 4. Write Code

- Fix bugs
- Implement features
- Improve performance
- Add tests

---

## 🛠️ Development Setup

### Prerequisites

- Google Chrome (version 88+)
- Git
- Text editor (VS Code recommended)
- Basic knowledge of JavaScript, HTML, CSS

### Setup Steps

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/taborg.git
   cd taborg
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Load extension in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `taborg` folder

5. **Make your changes**
   - Edit code in your editor
   - Reload extension to test changes

6. **Test thoroughly**
   - Test all affected features
   - Check console for errors
   - Test in different scenarios

---

## 💻 Coding Guidelines

### JavaScript Style

```javascript
// Use const for constants
const MAX_SESSIONS = 50;

// Use let for variables
let tabCount = 0;

// Use async/await for promises
async function loadTabs() {
  const tabs = await chrome.tabs.query({});
  return tabs;
}

// Add comments for complex logic
// Calculate the difference in days
const diffDays = Math.floor(diffMs / 86400000);

// Use descriptive variable names
const duplicateTabs = findDuplicates(allTabs);
```

### Code Organization

- Keep functions small and focused
- Use meaningful function names
- Add JSDoc comments for public functions
- Group related functionality
- Avoid global variables

### Example JSDoc

```javascript
/**
 * Removes duplicate tabs from the browser
 * @param {Array<number>} tabIds - Array of tab IDs to check
 * @returns {Promise<number>} Number of tabs removed
 */
async function removeDuplicates(tabIds) {
  // Implementation
}
```

### CSS Style

```css
/* Use CSS variables for colors */
:root {
  --primary: #6366f1;
  --text-primary: #111827;
}

/* Use meaningful class names */
.tab-item {
  display: flex;
  align-items: center;
}

/* Group related properties */
.button {
  /* Layout */
  display: flex;
  padding: 10px;

  /* Visual */
  background: var(--primary);
  border-radius: 8px;

  /* Text */
  color: white;
  font-weight: 600;
}
```

### HTML Best Practices

- Use semantic HTML
- Include ARIA labels for accessibility
- Keep structure clean and organized
- Use data attributes for JavaScript hooks

---

## 📝 Commit Messages

### Format

```
type(scope): brief description

Detailed explanation (optional)

Fixes #123
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```
feat(sessions): add export to JSON feature

Allows users to export saved sessions as JSON files
for backup or sharing purposes.

Fixes #45
```

```
fix(search): case-insensitive tab search

Search now properly handles uppercase and lowercase
input, making it more user-friendly.

Fixes #67
```

---

## 🔄 Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Test thoroughly** in Chrome
3. **Check for console errors**
4. **Follow code style guidelines**
5. **Update CHANGELOG.md** with your changes

### PR Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass (if applicable)
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] No console errors
- [ ] Feature works as expected
- [ ] PR has clear description

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
How did you test these changes?

## Screenshots
If applicable, add screenshots

## Related Issues
Fixes #123
```

### Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, PR will be merged
4. Your contribution will be in the next release!

---

## 🐛 Reporting Bugs

### Before Reporting

1. Check if bug already reported
2. Verify bug in latest version
3. Test in fresh Chrome profile

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
 - OS: [e.g. Windows 10]
 - Chrome Version: [e.g. 120]
 - Extension Version: [e.g. 1.0.0]

**Additional context**
Any other relevant information
```

---

## 💡 Suggesting Features

### Good Feature Requests Include

- **Clear use case**: Why is this needed?
- **User benefit**: How does this help users?
- **Implementation idea**: How might this work?
- **Examples**: Similar features in other tools

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
What should the feature do?

**Describe alternatives you've considered**
Other approaches you've thought of

**Additional context**
Mockups, examples, or related features
```

---

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in the extension (if significant contribution)

---

## ❓ Questions?

- **General questions**: Open a [Discussion](https://github.com/yourusername/taborg/discussions)
- **Bug reports**: Open an [Issue](https://github.com/yourusername/taborg/issues)
- **Security issues**: Email security@taborg.app

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Taborg! 💜
