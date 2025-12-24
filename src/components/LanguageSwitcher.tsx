import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const LanguageSwitcher = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/${e.target.value}/home`);
  };

  return (
    <select value={lang} onChange={handleChange} aria-label="Language selector">
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
      <option value="ja">日本語</option>
    </select>
  );
};

export default LanguageSwitcher;
