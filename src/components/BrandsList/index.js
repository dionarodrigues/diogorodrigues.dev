import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import * as S from './styled';

const BrandsList = ({ title }) => {
  const { logoNike, logoHp, logoHcss, logoCallsource, logoResoptima, logoDefinitelyTyped } = useStaticQuery(
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

        logoDefinitelyTyped: file(relativePath: { eq: "brands/definitely-typed.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const logos = [
    {
      img: logoNike.childImageSharp.fluid,
      link: "https://www.nike.com.br/",
      label: "Nike"
    },
    {
      img: logoHp.childImageSharp.fluid,
      link: "https://www.life-global.org/",
      label: "HP Life"
    },
    {
      img: logoHcss.childImageSharp.fluid,
      link: "https://careers.hcss.com/",
      label: "HCSS"
    },
    {
      img: logoDefinitelyTyped.childImageSharp.fluid,
      link: "https://github.com/DefinitelyTyped",
      label: "Definitely Typed"
    },
    {
      img: logoCallsource.childImageSharp.fluid,
      link: "https://www.callsource.com/",
      label: "CallSource"
    },
    {
      img: logoResoptima.childImageSharp.fluid,
      link: "https://resoptima.com/",
      label: "Resoptima"
    }
  ];

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Container>
        {logos &&
          logos.map((logo, index) => (
            <div key={index}>
              <Img fluid={logo.img} alt={`${logo.label} Logo`} title={logo.label} />
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
