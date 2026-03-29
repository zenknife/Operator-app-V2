import React from "react";
import { createRoot } from "react-dom/client";

const rootEl = document.getElementById("root");

function showError(message) {
  rootEl.innerHTML = `
    <div style="padding:24px;color:#fff;background:#111613;font-family:sans-serif;white-space:pre-wrap;">
      <div style="font-weight:700;margin-bottom:12px;">APP ERROR</div>
      <div>${String(message)}</div>
    </div>
  `;
}

import("./App.jsx")
  .then((mod) => {
    const App = mod.default;
    try {
      createRoot(rootEl).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    } catch (err) {
      showError(err?.stack || err?.message || err);
    }
  })
  .catch((err) => {
    showError(err?.stack || err?.message || err);
  });
