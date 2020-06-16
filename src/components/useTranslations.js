// import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { LocaleContext } from '../layouts/BaseLayout';

function useTranslations(locale = 'en') {
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // Only return tranlations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0];

  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            availableMessage

            presentation
            jobDescription
            aboutMeShort

            portfolioPageDescription
            blogPageDescription
            contactPageDescription
            brandsListTitle

            contactTitle
            contactSubtitle
            contactBeforeSubtitle
            contactAfterSubtitle

            home
            articles
            allArticles
            category
            toRead
            projects
            allProjects

            client
            role
            technologies

            turnOn
            turnOff

            next
            prev
            of

            copyright
            siteInfo
            location
          }
        }
      }
    }
  }
`;
