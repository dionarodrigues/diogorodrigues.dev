import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';

import * as S from './styled';

const AuthorCard = () => {
  const { authorPhoto } = useStaticQuery(query);

  return (
    <S.AuthorCard>
      <div className="container">
        <S.AuthorPhoto>
          {authorPhoto && (
            <Img
              fluid={authorPhoto.childImageSharp.fluid}
              alt="Diogo Rodrigues"
            />
          )}
        </S.AuthorPhoto>
        <S.AuthorInfo>
          <p>
            <strong>Diogo Rodrigues</strong>
          </p>
          <p>Front-end designer</p>
          <ul>
            <li>
              <a href="https://github.com/diogorodrigues/" title="Github">
                <Github size={25} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_diogorodrigues" title="Twitter">
                <Twitter size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/diogorodrigues02"
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
