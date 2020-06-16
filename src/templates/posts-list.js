import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import HeaderOfContent from '../components/HeaderOfContent';
import LinksList from '../components/LinksList';
import localizedLink from '../components/localizedLink';

// import Pagination from '../components/Pagination';

import { useLocale } from '../hooks/locale';
import useTranslations from '../components/useTranslations';

import * as S from '../components/Templates/styled/post-list';

const Blog = props => {
  const { locale } = useLocale();
  const { blogPageDescription } = useTranslations(locale);

  const projectList = props.data.allMarkdownRemark.edges;
  const projectListItems = projectList.map(item => {
    return {
      label: item.node.frontmatter.title,
      url: localizedLink(`/blog/${item.node.fields.slug}`, locale),
      date: item.node.frontmatter.date,
      isExternal: false,
    };
  });

  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  return (
    <>
      <SEO title="Blog" />

      <HeaderOfContent
        title="Blog"
        subtitle="thoughts"
        beforeSubtitle="words&"
        description={blogPageDescription}
        isHorizontal
        isCentered
      />

      <div className="container">
        <LinksList listItems={projectListItems} />
      </div>

      {/* <S.PostsList>
        <S.ListWrapper>
          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            currentPage={currentPage}
            numPages={numPages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </S.ListWrapper>
      </S.PostsList> */}
    </>
  );
};

export const query = graphql`
  query PostsList($locale: String!, $dateFormat: String!, $skip: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      skip: $skip
    ){
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
