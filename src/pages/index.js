import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import useTranslations from '../components/useTranslations';

import HeroBanner from '../components/HeroBanner';
// import backgroundImage from '../../static/assets/img/diogo-rodrigues-hero.png';
import ArrowStroke from '../components/ArrowStroke';
import ButtonHighlight from '../components/ButtonHighlight';
import LinksList from '../components/LinksList';
import BrandsList from '../components/BrandsList';
import ProjectItem from '../components/ProjectItem';

import localizedLink from '../components/localizedLink';
import { useLocale } from '../hooks/locale';

import * as S from '../components/Pages/styled/home';

const Index = ({ data: { blog, portfolio } }) => {
  const { locale } = useLocale();

  const {
    presentation,
    jobDescription,
    aboutMeShort,
    allArticles,
    allProjects,
    brandsListTitle,
  } = useTranslations(locale);

  const projectlist = blog.edges;
  const projectlistItems = projectlist.map(item => {
    return {
      label: item.node.frontmatter.title,
      url: localizedLink(`/blog/${item.node.fields.slug}`, locale),
      date: item.node.frontmatter.date,
      isExternal: false,
    };
  });

  const portfolioList = portfolio.edges;
  const portfolioListItems = portfolioList.map(item => {
    return {
      title: item.node.frontmatter.client,
      description: item.node.frontmatter.title,
      url: localizedLink(`/portfolio/${item.node.fields.slug}`, locale),
      imgUrl: item.node.frontmatter.featuredImage,
      category: item.node.frontmatter.category,
      count: '',
    };
  });

  return (
    <div className="homepage">
      <SEO title="Home" />
      <S.Banner>
        <HeroBanner
          title={presentation}
          description={jobDescription}
          aboutMeShort={aboutMeShort}
          locale={locale}
          // background={`url(${backgroundImage})`}
        />
        <S.ScrollButton>
          <ArrowStroke
            direction="bottom"
            size={40}
            color="var(--border-color)"
          />
        </S.ScrollButton>
      </S.Banner>
      <S.PortfolioSection>
        <div className="container">
          <S.Projects>
            {portfolioListItems.map((item, index) => (
              <div key={index}>
                <ProjectItem
                  title={item.title}
                  url={item.url}
                  imgUrl={item.imgUrl}
                  description={item.description}
                  // category={item.category}
                />
              </div>
            ))}
          </S.Projects>

          <S.Brands>
            <BrandsList title={brandsListTitle} />
          </S.Brands>

          <S.ButtonMore>
            <ButtonHighlight title={allProjects} link="/portfolio" />
          </S.ButtonMore>
        </div>
      </S.PortfolioSection>
      <S.ArticlesSection>
        <div className="container">
          <div>
            <ul>
              <LinksList listItems={projectlistItems} />
              <li style={{ marginTop: '35px' }}>
                <Link to={localizedLink(`/blog`, locale)}>{allArticles}</Link>
              </li>
            </ul>
          </div>
        </div>
      </S.ArticlesSection>
    </div>
  );
};

export default Index;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    blog: allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)

          }
          fields {
            slug
          }
        }
      }
    },
    portfolio: allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(portfolio)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
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
    },
  }
`;
