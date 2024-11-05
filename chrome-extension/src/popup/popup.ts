/**
 * Popup script for handling user interactions
 */
document.addEventListener("DOMContentLoaded", () => {
  const highlightButton = document.getElementById("highlight-button");

  highlightButton?.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, { action: "highlight" });
      }
    });
  });
});
