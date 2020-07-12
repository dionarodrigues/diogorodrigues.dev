import { useStaticQuery, graphql } from 'gatsby';

function useLanguageMapping() {
  const { rawData } = useStaticQuery(query);

  const languageMapping = rawData.edges.map(item => {
    return item.node.translations.languageMapping;
  });

  return languageMapping[0];
}

export default useLanguageMapping;

const query = graphql`
  query useLanguageMapping {
    rawData: allFile(
      filter: { sourceInstanceName: { eq: "language-mapping" } }
    ) {
      edges {
        node {
          name
          translations: childLanguageMappingJson {
            languageMapping {
              en
              pt
            }
          }
        }
      }
    }
  }
`;
