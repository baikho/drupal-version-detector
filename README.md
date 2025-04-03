# Drupal Version Detector

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-brightgreen?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/drupal-version-detector/dhanmiicielpdegicclkjbkgochdiihi)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Made for Drupal](https://img.shields.io/badge/Drupal-Dev%20Tool-blue?logo=drupal)
[![Last Commit](https://img.shields.io/github/last-commit/baikho/drupal-tooler)](https://github.com/baikho/drupal-version-detector/commits/1.x)
[![License: MIT](https://img.shields.io/github/license/baikho/drupal-version-detector)](LICENSE)
[![Stars](https://img.shields.io/github/stars/baikho/drupal-tooler?style=social)](https://github.com/baikho/drupal-version-detector/stargazers)

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

Available on the [Chrome Web Store](https://chromewebstore.google.com/detail/drupal-version-detector/dhanmiicielpdegicclkjbkgochdiihi).

Or install manually:

1. Clone this repo or [download the ZIP](https://github.com/baikho/drupal-version-detector/releases)
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
