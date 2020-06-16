import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';

import { useLocale } from '../hooks/locale';
import useTranslations from '../components/useTranslations';

import ProjectHeroBanner from '../components/ProjectHeroBanner';

import { Content } from '../components/Content/styled';
import * as S from '../components/Templates/styled/project';

const Project = props => {
  const { locale } = useLocale();
  const { client, role, technologies } = useTranslations(locale);

  const post = props.data.markdownRemark;

  const featuredImage = props.data.featuredImage
    ? props.data.featuredImage.childImageSharp.fluid
    : null;

  const bannerImage = props.data.bannerImage
    ? props.data.bannerImage.childImageSharp.fluid
    : null;

  const projectImageLarge = props.data.projectImageLarge
    ? props.data.projectImageLarge.childImageSharp.fluid
    : null;

  const projectImageMedium01 = props.data.projectImageMedium01
    ? props.data.projectImageMedium01.childImageSharp.fluid
    : null;

  const projectImageMedium02 = props.data.projectImageMedium02
    ? props.data.projectImageMedium02.childImageSharp.fluid
    : null;

  const projectImageSmall01 = props.data.projectImageSmall01
    ? props.data.projectImageSmall01.childImageSharp.fluid
    : null;

  const projectImageSmall02 = props.data.projectImageSmall02
    ? props.data.projectImageSmall02.childImageSharp.fluid
    : null;

  const projectImageSmall03 = props.data.projectImageSmall03
    ? props.data.projectImageSmall03.childImageSharp.fluid
    : null;

  const projectInfo = [
    {
      label: client,
      description: post.frontmatter.client,
    },
    {
      label: role,
      description: post.frontmatter.role,
    },
    {
      label: technologies,
      description: post.frontmatter.technologies,
    },
  ];

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage}
      />

      <S.Header>
        <ProjectHeroBanner
          title={post.frontmatter.title}
          projectInfo={projectInfo}
        />
      </S.Header>

      <S.FeaturedImage>
        {bannerImage && (
          <Img fluid={bannerImage} alt={post.frontmatter.title} />
        )}
      </S.FeaturedImage>

      <S.Description>
        <div className="container">
          <h2>{post.frontmatter.about}</h2>
        </div>
      </S.Description>

      <Content>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Content>

      <S.ImagesGallery>
        <div className="container">
          {projectImageLarge && (
            <S.ImagesGalleryLarge>
              <Img fluid={projectImageLarge} alt={post.frontmatter.title} />
            </S.ImagesGalleryLarge>
          )}

          {(projectImageMedium01 || projectImageMedium02) && (
            <S.ImagesGalleryMedium>
              {projectImageMedium01 && (
                <Img
                  fluid={projectImageMedium01}
                  alt={post.frontmatter.title}
                />
              )}
              {projectImageMedium02 && (
                <Img
                  fluid={projectImageMedium02}
                  alt={post.frontmatter.title}
                />
              )}
            </S.ImagesGalleryMedium>
          )}

          {(projectImageSmall01 ||
            projectImageSmall02 ||
            projectImageSmall03) && (
            <S.ImagesGallerySmall>
              {projectImageSmall01 && (
                <Img fluid={projectImageSmall01} alt={post.frontmatter.title} />
              )}
              {projectImageSmall02 && (
                <Img fluid={projectImageSmall02} alt={post.frontmatter.title} />
              )}
              {projectImageSmall03 && (
                <Img fluid={projectImageSmall03} alt={post.frontmatter.title} />
              )}
            </S.ImagesGallerySmall>
          )}
        </div>
      </S.ImagesGallery>

      <S.LinkWrapper>
        <a
          href={post.frontmatter.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to project
        </a>
      </S.LinkWrapper>
    </>
  );
};

export const query = graphql`
  query Project(
    $locale: String!
    $title: String!
    $featuredImage: String!
    $bannerImage: String!
    $projectImageLarge: String!
    $projectImageMedium01: String!
    $projectImageMedium02: String!
    $projectImageSmall01: String!
    $projectImageSmall02: String!
    $projectImageSmall03: String!
  ) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        category
        client
        about
        role
        technologies
        link
        link
      }
      html
    }
    featuredImage: file(relativePath: { eq: $featuredImage }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bannerImage: file(relativePath: { eq: $bannerImage }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImageLarge: file(relativePath: { eq: $projectImageLarge }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImageMedium01: file(relativePath: { eq: $projectImageMedium01 }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImageMedium02: file(relativePath: { eq: $projectImageMedium02 }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImageSmall01: file(relativePath: { eq: $projectImageSmall01 }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImageSmall02: file(relativePath: { eq: $projectImageSmall02 }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImageSmall03: file(relativePath: { eq: $projectImageSmall03 }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Project;
