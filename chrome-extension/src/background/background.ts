/**
 * Background script for handling extension-wide functionality
 */
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
