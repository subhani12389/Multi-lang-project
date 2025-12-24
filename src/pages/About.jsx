import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-card">
      <h1>{t("about")}</h1>
      <p>{t("aboutDescription")}</p>
    </div>
  );
}

export default About;
