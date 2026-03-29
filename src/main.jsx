import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      Hello. App V2 is working.
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
