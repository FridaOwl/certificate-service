import React from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton/LanguageButton";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="App-header">
      <div className="languageButtons">
        {languages.map(({ code, label }) => (
          <LanguageButton
            key={code}
            code={code}
            label={label}
            currentLanguage={i18n.language}
            onChangeLanguage={changeLanguage}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
