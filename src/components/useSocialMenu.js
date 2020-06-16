// import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function useSocialMenu(locale) {
  // Query the JSON files in <rootDir>/config/mainMenu
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      items: item.node.translations.items,
    };
  });

  // Only return menu for the current locale
  const { items } = simplified.filter(lang => lang.name === locale)[0];

  return items;
}

export default useSocialMenu;

const query = graphql`
  query useSocialMenu {
    rawData: allFile(filter: { sourceInstanceName: { eq: "socialMenu" } }) {
      edges {
        node {
          name
          translations: childSocialMenuJson {
            items {
              url
              label
            }
          }
        }
      }
    }
  }
`;
