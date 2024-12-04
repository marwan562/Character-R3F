import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CharacterAnimationsProvider } from "./context/CharacterAnimationsProvider";
import { CharacterCustomizationProvider } from "./context/CharacterCustomizationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharacterAnimationsProvider>
      <CharacterCustomizationProvider>
        <App />
      </CharacterCustomizationProvider>
    </CharacterAnimationsProvider>
  </React.StrictMode>
);
