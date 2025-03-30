# Drupal Version Detector

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/your-extension-id.svg)
![Made for Drupal](https://img.shields.io/badge/Drupal-Dev%20Tool-orange)

A lightweight Chrome extension that detects the **Drupal core version** of any website and displays it in the toolbar. Built for contributors, reviewers, and site builders who work with Drupal every day.

---

## 🚀 Features

- 🔍 Detects Drupal versions from:
  - Meta tags (`<meta name="Generator">`)
  - Asset URLs with `?v=10.4.3` style query parameters
- 🎯 Shows version in:
  - Toolbar popup
  - Tooltip (on hover)
  - Badge (major.minor version)

---

## 📸 Screenshots

![Drupal Version Detector](https://github.com/user-attachments/assets/95898430-c8c7-4a05-bc77-019fc10cd1e3)

---

## 📦 Installation

Available on the [Chrome Web Store](https://chrome.google.com/webstore/detail/your-extension-id).

Or install manually:

1. Clone this repo or [download the ZIP](https://github.com/baikho/drupal-version-detector/v1.0.0)
2. Visit `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder

---

## 🔐 Permissions Used

- `activeTab`: To access the current page when you click the extension
- `scripting`: To inject the version detection script
- `<all_urls>`: To support version detection on any Drupal-powered site

---

## 👨‍💻 For Developers

Want to contribute? Found a site it doesn’t work on? PRs welcome!  
See [`detectDrupalVersion()`](./content.js) for the logic.

---

## 📄 License

MIT License
