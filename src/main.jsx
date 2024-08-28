import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import MartContextProvider from "./context/MartContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <MartContextProvider>
            <App />
          </MartContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
