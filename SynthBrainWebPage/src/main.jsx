import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SBlogoB from "/src/public/SBlogoB.png";
import SBlogoW from "/src/public/SBlogoW.png";

const setFavicon = (isDark) => {
  let favicon = document.querySelector("link[rel='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }
  favicon.href = isDark ? SBlogoW : SBlogoB;
};

const media = window.matchMedia("(prefers-color-scheme: dark)");
setFavicon(media.matches);
media.addEventListener("change", (e) => setFavicon(e.matches));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
