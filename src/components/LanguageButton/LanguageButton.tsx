import React from "react";
import "./LanguageButton";

interface LanguageButtonProps {
  code: string;
  label: string;
  currentLanguage: string;
  onChangeLanguage: (language: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  code,
  label,
  currentLanguage,
  onChangeLanguage,
}) => {
  return (
    <button
      onClick={() => onChangeLanguage(code)}
      className={`languageButton ${currentLanguage === code ? "active" : ""}`}
    >
      {label}
    </button>
  );
};

export default LanguageButton;
