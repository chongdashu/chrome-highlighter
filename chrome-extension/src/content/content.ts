/// <reference types="chrome"/>

/**
 * Content script that handles text highlighting functionality
 */
console.log("Content script loaded");

// Basic highlight function
function highlightSelection() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.className = "chrome-extension-highlight";
  span.style.backgroundColor = "yellow";

  range.surroundContents(span);
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "highlight") {
    highlightSelection();
  }
});
