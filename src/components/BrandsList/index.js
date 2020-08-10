import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import * as S from './styled';

const BrandsList = ({ title }) => {
  const { logoNike, logoHp, logoHcss, logoCallsource, logoResoptima } = useStaticQuery(
    graphql`
      {
        logoNike: file(relativePath: { eq: "brands/nike.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        logoHp: file(relativePath: { eq: "brands/hp.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        logoHcss: file(relativePath: { eq: "brands/hcss.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        logoCallsource: file(relativePath: { eq: "brands/callsource.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

        logoResoptima: file(relativePath: { eq: "brands/resoptima.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const imgs = [
    logoNike.childImageSharp.fluid,
    logoHp.childImageSharp.fluid,
    logoHcss.childImageSharp.fluid,
    logoCallsource.childImageSharp.fluid,
    logoResoptima.childImageSharp.fluid,
  ];

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Container>
        {imgs &&
          imgs.map((img, index) => (
            <div key={index}>
              <Img fluid={img} />
            </div>
          ))}
      </S.Container>
    </>
  );
};

BrandsList.propTypes = {
  title: PropTypes.string,
};

BrandsList.defaultProps = {
  title: '',
};

export default BrandsList;
