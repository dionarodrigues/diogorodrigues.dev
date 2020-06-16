import styled from 'styled-components';
import media from 'styled-media-query';

export const Banner = styled.div`
  position: relative;
  /* min-height: 70vh; */
  margin-top: -140px;
  ${media.greaterThan('large')`
    margin-top: -105px;
  `}

  & > div {
    min-height: 70vh;
    padding-top: 105px;
  }
`;

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: normal;

  ${media.lessThan('large')`
    font-size: 2.8rem;
    line-height: 1.1;
  `}
`;

export const FeaturedImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;

  ${media.greaterThan('huge')`
    width: 120%;
    margin-left: -10%;
  `}
`;

export const AuthorCard = styled.div`
  width: 100%;
  margin-top: -70px;
  margin-bottom: 30px;
  position: relative;
  z-index:1;
  text-align: center;

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
  }
  /*
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;

  ${media.greaterThan('huge')`
    width: 120%;
    margin-left: -10%;
  `} */
`;
export const AuthorPhoto = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--space-sm);
`;

export const AuthorInfo = styled.div`
  p {
    font-weight: var(--weight-semibold);
  }

  ul {
    display: flex;
    align-items: center;
    margin-top: var(--space-xs);
  }

  li {
    margin-right: var(--space-sm);
  }
`;

export const Comments = styled.div`
  margin: calc(var(--space-xlg) * 2) auto;
  max-width: 90%;
`;
