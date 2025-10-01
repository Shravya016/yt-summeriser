import { useEffect, useState } from "react";

function App() {
  const [lastAction, setLastAction] = useState("");

  useEffect(() => {
    // Fetch stored message when popup opens
    if (window.chrome?.storage?.local) {
      window.chrome.storage.local.get("lastAction", (result) => {
        if (result.lastAction) {
          setLastAction(result.lastAction);
        }
      });
    }

    // Also listen to runtime messages directly
    if (window.chrome?.runtime) {
      window.chrome.runtime.onMessage.addListener((request) => {
        if (request.action === "openPopup") {
          setLastAction("summarize");
        }
      });
    }
  }, []);

  return (
    <div style={{ width: 300, padding: "1rem" }}>
      <h3>YouTube Summariser</h3>
      {lastAction === "summarize" ? (
        <p>✅ Button clicked on YouTube! Now show summary UI here.</p>
      ) : (
        <p>Waiting for action...</p>
      )}
    </div>
  );
}

export default App;
