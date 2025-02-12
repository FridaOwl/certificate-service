import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="App-footer">
      <p>{t("footerCopyright", { year: new Date().getFullYear() })}</p>
      <nav>
        <ul>
          <li>
            <a href="/privacy-policy">{t("privacyPolicy")}</a>
          </li>
          <li>
            <a href="/terms-of-service">{t("termsOfService")}</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
