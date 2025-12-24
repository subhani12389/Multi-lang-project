import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import Home from "../pages/Home";
import About from "../pages/About";

function AppRouter() {
  const { i18n } = useTranslation();

  // RTL handling
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
  <BrowserRouter>
    <div className="app-container">

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="lang-buttons">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
          <button onClick={() => i18n.changeLanguage("ja")}>JA</button>
        </div>
      </header>

      {/* Page Content */}
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

    </div>
  </BrowserRouter>
);

}

export default AppRouter;
