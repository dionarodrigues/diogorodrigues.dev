// import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function useMainMenu(locale) {
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

export default useMainMenu;

const query = graphql`
  query useMainMenu {
    rawData: allFile(filter: { sourceInstanceName: { eq: "mainMenu" } }) {
      edges {
        node {
          name
          translations: childMainMenuJson {
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
