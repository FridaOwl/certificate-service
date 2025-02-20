const config = {
  fallbackLng: "ru",
  i18n: {
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  },
};

export default config;
