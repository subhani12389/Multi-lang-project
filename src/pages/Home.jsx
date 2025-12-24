import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page-card">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}

export default Home;
