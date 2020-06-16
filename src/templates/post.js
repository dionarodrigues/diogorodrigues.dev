import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { DiscussionEmbed } from 'disqus-react';

import SEO from '../components/seo';

import PostHeroBanner from '../components/PostHeroBanner';
import AuthorCard from '../components/AuthorCard';
import useTranslations from '../components/useTranslations';

import { Content } from '../components/Content/styled';
import * as S from '../components/Templates/styled/post';

const Post = props => {
  const post = props.data.markdownRemark;

  const featuredImage = props.data.featuredImage
    ? props.data.featuredImage.childImageSharp.fluid
    : null;

  const authorPhoto = props.data.authorPhoto
    ? props.data.authorPhoto.childImageSharp.fluid
    : null;

  // console.log('featuredImage', featuredImage);

  const { toRead } = useTranslations();

  const disqusConfig = {
    shortname: 'diogorodrigues-dev',
    config: { identifier: post.fields.slug },
  };

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage}
      />

      <S.Banner>
        <PostHeroBanner
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          // imgUrl={post.frontmatter.featuredImage}
          date={post.frontmatter.date}
          // author="Diogo Rodrigues"
          category={post.frontmatter.category}
          timeToRead={`${post.timeToRead} min ${toRead}`}
        />
      </S.Banner>

      <AuthorCard />

      <Content>
        <S.FeaturedImage>
          {featuredImage && (
            <Img fluid={featuredImage} alt={post.frontmatter.title} />
          )}
        </S.FeaturedImage>

        <div className="container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <S.Comments>
          <DiscussionEmbed {...disqusConfig} />
        </S.Comments>
      </Content>
    </>
  );
};

export const query = graphql`
  query Post($locale: String!, $title: String!, $featuredImage: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        featuredImage
        date(formatString: "DD/MM/YYYY")
        category
      }
      timeToRead
      html
      fields {
        slug
      }
    }
    featuredImage: file(relativePath: { eq: $featuredImage }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Post;
