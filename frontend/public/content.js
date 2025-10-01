window.addEventListener("load", () => {
  const interval = setInterval(() => {
    const container = document.querySelector("#below");
    if (container && !document.querySelector("#summarize-btn")) {
      const btn = document.createElement("button");
      btn.id = "summarize-btn";
      btn.innerText = "Summarize 🎓";
      btn.style.padding = "10px";
      btn.style.background = "#ff0000";
      btn.style.color = "white";
      btn.style.cursor = "pointer";

      // Only send when button is clicked
      btn.onclick = () => {
        if (typeof window !== "undefined" && window.chrome && window.chrome.runtime) {
          window.chrome.runtime.sendMessage({ action: "openPopup" });
        } else {
          console.log("Chrome API not available (are you in dev mode?)");
        }
      };

      container.prepend(btn);
      clearInterval(interval);
    }
  }, 2000);
});
