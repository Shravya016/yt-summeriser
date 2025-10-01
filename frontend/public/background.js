window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPopup") {
    console.log("Message received from YouTube:", request);
    window.chrome.storage.local.set({ lastAction: "summarize" });
    sendResponse({ status: "ok" });
  }
});
