// ==UserScript==
// @name        Remove Upgrade Button for Proton
// @namespace   Violentmonkey Scripts
// @icon        data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UHJvdG9uPC90aXRsZT48cGF0aCBkPSJNMi40NzQgMTcuNzVWMjRoNC40MDF2LTUuOTc5YzAtLjU4Mi4yMzItMS4xNC42NDUtMS41NTFhMi4yMDQgMi4yMDQgMCAwIDEgMS41NTYtLjY0M2g0LjUxM2E3Ljk1NSA3Ljk1NSAwIDAgMCA1LjYxMi0yLjMxOCA3LjkwNyA3LjkwNyAwIDAgMCAyLjMyNS01LjU5NSA3LjkxIDcuOTEgMCAwIDAtMi4zMjUtNS41OTZBNy45NTggNy45NTggMCAwIDAgMTMuNTg3IDBIMi40NzR2Ny44MTJsNC40MDFWNC4xMjloNi40MTZjLjk5NSAwIDEuOTUxLjM5NCAyLjY1NiAxLjA5Ny43MDQuNyAxLjEgMS42NTMgMS4xMDEgMi42NDZhMy43NDIgMy43NDIgMCAwIDEtMS4xMDEgMi42NDggMy43NjYgMy43NjYgMCAwIDEtMi42NTYgMS4wOTdIOC42MjdhNi4xNTggNi4xNTggMCAwIDAtNC4zNTIgMS43OTUgNi4xMzMgNi4xMzMgMCAwIDAtMS44MDEgNC4zMzhaIi8+PC9zdmc+
// @version     1.0.0
// @match       *://*.proton.me/*
// @grant       none
// @license     MIT
// @author      Blunnix
// @description Remove Upgrade Button for Proton Services.
// @run-at      document-start
// ==/UserScript==

(function () {
    'use strict';

    const SELECTOR = '[class*="button-promotion"]';

    function removeUpgradeButtons(root) {
        if (!(root instanceof Element) && root !== document) return;

        if (root instanceof Element && root.matches(SELECTOR)) {
            root.remove();
            return;
        }

        root.querySelectorAll(SELECTOR).forEach(el => el.remove());
    }

    removeUpgradeButtons(document);

    const observer = new MutationObserver(mutations => {
        for (const m of mutations) {
            if (m.type === 'childList') {
                m.addedNodes.forEach(node => {
                    if (node.nodeType === 1) removeUpgradeButtons(node);
                });
            } else if (m.type === 'attributes' && m.target instanceof Element) {
                if (m.target.matches(SELECTOR)) m.target.remove();
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });
})();