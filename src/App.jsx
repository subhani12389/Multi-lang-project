import React, { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { i18n } = useTranslation();

  // Set RTL or LTR based on selected language
  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <div>
        {/* Language buttons */}
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
        <button onClick={() => i18n.changeLanguage("ja")}>JA</button>
      </div>

      {/* Navigation */}
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>

      {/* Route outlet */}
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
