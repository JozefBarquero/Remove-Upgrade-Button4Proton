# Remove Upgrade Button for Proton

*README.md by Deepseek IA*

A lightweight Userscript that removes every "Upgrade" promotion button from all Proton services (Mail, Calendar, Drive, Pass, VPN, etc.), keeping the interface clean and free of subscription nags.

---

## Features

- **Universal Removal:** Detects and deletes any element whose class contains `button-promotion`, covering every variant used across Proton apps (`button-promotion--icon-gradient`, `button-promotion--purple-blue-gradient`, and any future suffix).
- **Dynamic SPA Support:** Uses a `MutationObserver` so upgrade buttons are removed even when they appear after navigation, route changes, or lazy rendering.
- **Attribute-Aware:** Watches for `class` mutations on existing elements, so buttons that become promotion buttons later are still caught.
- **Ultra Lightweight & Fast:** Built with clean native JavaScript, no dependencies, no external requests, no runtime overhead.
- **Runs at Document Start:** Injects before the page renders to avoid any flash of the upgrade button.

---

## Installation

1. Install a userscript manager browser extension:
   - [Violentmonkey](https://violentmonkey.github.io/) (Recommended)
   - [Tampermonkey](https://www.tampermonkey.net/)
2. Open your userscript manager dashboard and create a new script.
3. Paste the contents of `Remove Upgrade Button for Proton.user.js` into the editor.
4. Save the script.

---

## How It Works

1. **Class Prefix Matching:** Uses the CSS attribute selector `[class*="button-promotion"]` so it matches `button-promotion`, `button-promotion--icon-gradient`, `button-promotion--purple-blue-gradient`, and any other class that starts with that prefix.
2. **Initial Sweep:** On load, scans the entire DOM and removes every matching element already present.
3. **Live Monitoring:** A `MutationObserver` on `document.documentElement` listens for:
   - **Added nodes:** Newly inserted subtrees are scanned for upgrade buttons.
   - **Attribute changes:** Existing elements that receive a `button-promotion*` class are removed immediately.
4. **No Side Effects:** Only elements carrying the promotion class are touched. No global filters, no color overrides, no interference with Proton's normal UI behavior.

---

## Compatibility

- **Supported Domain:** Works across all Proton services (`https://*.proton.me/*`), including Mail, Calendar, Drive, Pass, VPN, and the account dashboard.
- **Browsers:** Compatible with Chrome, Firefox, Edge, Brave, Safari, or any browser running a userscript manager.

---

## License

[MIT](LICENSE) - Free for personal, open-source, and educational use. Created by **Blunnix**.