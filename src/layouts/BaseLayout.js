import React from 'react';
import GlobalStyles from '../styles/global';

import { useLocale } from '../hooks/locale';

import useMainMenu from '../components/useMainMenu';
import useSocialMenu from '../components/useSocialMenu';
import useTranslations from '../components/useTranslations';

import HeaderOfPage from '../components/HeaderOfPage';
import FooterOfPage from '../components/FooterOfPage';
import Menu from '../components/Menu';
import MenuHighlighted from '../components/MenuHighlighted';
import LanguagesMenu from '../components/LanguagesMenu';

import * as S from './styled';

const BaseLayout = ({ children, pageContext: { locale } }) => {
  const { changeLocale } = useLocale();
  changeLocale(locale);

  const mainMenuItems = useMainMenu(locale);
  const mainMenuListItems = mainMenuItems.map(item => {
    return {
      label: item.label,
      url: item.url,
      isActive: false,
    };
  });
  // console.log(`mainMenuListItems: ${JSON.stringify(mainMenuListItems)}`);

  const socialMenuItems = useSocialMenu(locale);
  const socialMenuListItems = socialMenuItems.map(item => {
    return {
      label: item.label,
      url: item.url,
      isActive: false,
      isExternal: true,
    };
  });
  // console.log(`socialMenuListItems: ${JSON.stringify(socialMenuListItems)}`);

  const { availableMessage, copyright, siteInfo, location } = useTranslations(
    locale
  );

  return (
    <>
      <GlobalStyles />

      <HeaderOfPage
        locale={locale}
        renderLanguagesMenu={() => (
          <LanguagesMenu />
          // <Menu
          //   isNeverVertical
          //   color="var(--text-color-light)"
          //   listItems={[
          //     {
          //       label: 'en',
          //       url: '/',
          //       isActive: locale === 'en',
          //     },
          //     {
          //       label: 'pt',
          //       url: '/pt/',
          //       isActive: locale === 'pt',
          //     },
          //   ]}
          // />
        )}
        renderMainMenu={() => <Menu listItems={mainMenuListItems} />}
        renderMainMenuMobile={() => (
          <MenuHighlighted listItems={mainMenuListItems} />
        )}
        renderSocialMenu={() => (
          <Menu isLarge listItems={socialMenuListItems} />
        )}
      />

      {/* <S.MenuAditional>
        <Menu
          isNeverVertical
          listItems={[
            {
              label: 'en',
              url: '/',
              isActive: locale === 'en',
            },
            {
              label: 'pt',
              url: '/pt/',
              isActive: locale === 'pt',
            },
          ]}
        />
      </S.MenuAditional> */}

      <S.SiteContent role="main">{children}</S.SiteContent>

      <S.Footer>
        <FooterOfPage
          locale={locale}
          circleText={availableMessage}
          renderSocialMenu={() => (
            <Menu isLarge listItems={socialMenuListItems} />
          )}
          renderInfo={() => (
            <>
              <p>
                {location} - {copyright} <br />
              </p>
            </>
          )}
          isSimplified={false}
        />
      </S.Footer>
    </>
  );
};

export { BaseLayout };
