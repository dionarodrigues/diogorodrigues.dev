// import React from 'react';
// import { LocaleContext } from '../layouts/BaseLayout';
import locales from '../../config/i18n';

// Use the globally available context to choose the right path
function localizedLink(to, locale = 'en') {
  const isIndex = to === `/`;

  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  // However, if the homepage/index page is linked don't add the "to"
  // Because otherwise this would add a trailing slash
  if (locales) {
    const path = locales[locale].default
      ? to
      : `${locales[locale].path}${isIndex ? `` : `${to}`}`;

    return path;
  }

  return '';
}

export default localizedLink;
