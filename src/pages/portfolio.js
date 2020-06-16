import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import HeaderOfContent from '../components/HeaderOfContent';
import PostsList from '../components/ProjectList';
import localizedLink from '../components/localizedLink';

import { useLocale } from '../hooks/locale';
import useTranslations from '../components/useTranslations';

import * as S from '../components/Pages/styled/portfolio';

const Portfolio = props => {
  const { locale } = useLocale();
  const { portfolioPageDescription } = useTranslations(locale);

  const portfolioList = props.data.allMarkdownRemark.edges;
  const portfolioListItems = portfolioList.map((item, index) => {
    return {
      title: item.node.frontmatter.client,
      description: item.node.frontmatter.title,
      url: localizedLink(`/portfolio/${item.node.fields.slug}`, locale),
      imgUrl: item.node.frontmatter.featuredImage,
      category: item.node.frontmatter.category,
      count: `0${index + 1}`.slice(-2),
    };
  });

  return (
    <>
      <SEO title="Blog" />

      <S.Header>
        <HeaderOfContent
          title="Portfolio"
          subtitle="portfolio"
          beforeSubtitle="works&"
          afterSubtitle="&works"
          description={portfolioPageDescription}
          isHorizontal
          isCentered
          hasGrid
        />
      </S.Header>

      <div className="container">
        <PostsList listItems={portfolioListItems} />
      </div>
    </>
  );
};

export const query = graphql`
  query ProjectsList($locale: String!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(portfolio)\/.*\\.md$/"}
      }
    ){
      edges {
        node {
          frontmatter {
            title
            description
            client
            category
            featuredImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Portfolio;
