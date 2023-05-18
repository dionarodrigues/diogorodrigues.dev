import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';

import HeaderOfContent from '../components/HeaderOfContent';
import LinksList from '../components/LinksList';
import Text from '../components/Text';
import BrandsList from '../components/BrandsList';

import localizedLink from '../components/localizedLink';
import { useLocale } from '../hooks/locale';
import useTranslations from '../components/useTranslations';

import useSocialMenu from '../components/useSocialMenu';

import { Content } from '../components/Content/styled';
import * as S from '../components/Templates/styled/page';

const Page = props => {
  const { locale } = useLocale();

  const { brandsListTitle } = useTranslations(locale);

  const socialMenuItems = useSocialMenu(locale);
  const socialMenuListItems = socialMenuItems.map(item => {
    return {
      label: item.label,
      url: item.url,
      isActive: false,
      isExternal: true,
    };
  });

  const post = props.data.markdownRemark;

  const featuredImage = props.data.featuredImage
    ? props.data.featuredImage.childImageSharp.fluid
    : null;

  const {
    title,
    subtitle,
    beforeSubtitle,
    afterSubtitle,
    description,
    type_of_page,
  } = post.frontmatter;

  return (
    <>
      <SEO
        title={title}
        description={description}
        image={post.frontmatter.featuredImage}
      />

      <HeaderOfContent
        title={title}
        subtitle={subtitle}
        beforeSubtitle={beforeSubtitle}
        afterSubtitle={afterSubtitle}
        // description={description}
      />

      <S.Wrapper>
        <S.FeaturedImage>
          {featuredImage && (
            <Img fluid={featuredImage} alt={post.frontmatter.title} />
          )}
        </S.FeaturedImage>
        <Content>
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            {type_of_page === 'about' && <BrandsList title={brandsListTitle} />}
            {type_of_page === 'about' && (
              <>
                <hr />
                {locale === 'pt' ? (
                  <p>
                    Confira{' '}
                    <Link to={localizedLink(`/blog`, locale)}>
                      meus artigos
                    </Link>
                    ,{' '}
                    <Link to={localizedLink(`/portfolio`, locale)}>
                      meus projetos
                    </Link>{' '}
                    e me siga no{' '}
                    <a href="https://twitter.com/_dionarodrigues">Twitter</a> e{' '}
                    <a href="https://github.com/dionarodrigues">Github</a>.
                    Sinta-se a vontade para visitar meu{' '}
                    <a href="https://www.linkedin.com/in/dionarodrigues/">
                      Linkedin
                    </a>{' '}
                    ou{' '}
                    <Link to={localizedLink(`/contato`, locale)}>
                      entrar em contato
                    </Link>
                    .
                  </p>
                ) : (
                  <p>
                    Check out{' '}
                    <Link to={localizedLink(`/blog`, locale)}>my articles</Link>
                    ,{' '}
                    <Link to={localizedLink(`/portfolio`, locale)}>
                      my projects
                    </Link>{' '}
                    and follow me on{' '}
                    <a href="https://twitter.com/_dionarodrigues">Twitter</a>{' '}
                    and <a href="https://github.com/dionarodrigues">Github</a>.
                    Feel free to visit my{' '}
                    <a href="https://www.linkedin.com/in/dionarodrigues/">
                      Linkedin
                    </a>{' '}
                    or{' '}
                    <Link to={localizedLink(`/contact`, locale)}>
                      contact me
                    </Link>
                    .
                  </p>
                )}
              </>
            )}
          </div>
        </Content>
      </S.Wrapper>

      {type_of_page === 'contact' && (
        <div className="container">
          <Text sizeSmall={2} sizeMedium={3} sizeLarge={4.5}>
            <a href="mailto:dionarodrigues.dev@gmail.com">
              dionarodrigues.dev@gmail.com
            </a>
          </Text>
          <br />
          <Text sizeSmall={2} sizeMedium={3} sizeLarge={4.5}>
            <a href="tel:+353830932951">+353 83 093 2951</a>
          </Text>
          <br />
          <br />
          <LinksList listItems={socialMenuListItems} />
        </div>
      )}
    </>
  );
};

export const query = graphql`
  query Page($locale: String!, $title: String!, $featuredImage: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        subtitle
        beforeSubtitle
        afterSubtitle
        description
        featuredImage
        type_of_page
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
  }
`;

export default Page;
