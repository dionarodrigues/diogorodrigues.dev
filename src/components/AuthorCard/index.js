import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';

import { useLocale } from '../../hooks/locale';

import * as S from './styled';

const AuthorCard = () => {
  const { authorPhoto } = useStaticQuery(query);
  const { locale } = useLocale();

  return (
    <S.AuthorCard>
      <div className="container">
        <S.AuthorPhoto>
          {authorPhoto && (
            <Link to={locale === 'en' ? '/about' : '/pt/sobre'}>
              <Img
                fluid={authorPhoto.childImageSharp.fluid}
                alt="Diona Rodrigues"
              />
            </Link>
          )}
        </S.AuthorPhoto>
        <S.AuthorInfo>
          <p>
            <strong>Diona Rodrigues</strong>
          </p>
          <p>Front-end designer</p>
          <ul>
            <li>
              <a href="https://github.com/dionarodrigues/" title="Github">
                <Github size={25} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_dionarodrigues" title="Twitter">
                <Twitter size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dionarodrigues"
                title="Linkedin"
              >
                <Linkedin size={25} />
              </a>
            </li>
          </ul>
        </S.AuthorInfo>
      </div>
    </S.AuthorCard>
  );
};

const query = graphql`
  query {
    authorPhoto: file(relativePath: { eq: "about-me/diogo-rodrigues.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AuthorCard;
