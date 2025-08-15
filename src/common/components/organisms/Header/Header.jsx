import React from 'react';
import { i18nAdapter } from '../../../../infrastructure/adapters/i18n/i18nAdapter';

const Header = () => {
  const { t, i18n } = i18nAdapter.useTranslation(); // hook qui force le rerender quand langue change

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <h1>{t('greeting')}</h1>
      <button onClick={() => handleChangeLang('fr')}>🇫🇷</button>
      <button onClick={() => handleChangeLang('en')}>🇬🇧</button>
      <p>{t('language')}: {i18n.language}</p>
    </header>
  );
};

export default Header;
