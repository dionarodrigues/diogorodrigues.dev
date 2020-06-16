import styled from 'styled-components';

export const AuthorCard = styled.div`
  width: 100%;
  margin-top: -70px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  text-align: center;

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
  }
`;
export const AuthorPhoto = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--space-sm);
`;

export const AuthorInfo = styled.div`
  text-align: left;
  p {
    font-size: var(--text-small);
    margin-bottom: -8px;
    strong {
      font-size: var(--text-normal);
    }
  }

  ul {
    display: flex;
    align-items: center;
    margin-top: var(--space-xs);
  }

  li {
    margin-right: var(--space-sm);
  }

  a {
    color: var(--text-color);
    transition: 0.2s;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
