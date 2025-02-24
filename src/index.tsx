import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App"; // Your main App component
import "./index.css"; // Optional: if you have global styles

// Create a root element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
