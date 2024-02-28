import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/authContext.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);