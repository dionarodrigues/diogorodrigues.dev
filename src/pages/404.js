import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Text from '../components/Text';

import localizedLink from '../components/localizedLink';
import { useLocale } from '../hooks/locale';

const Container = styled.div`
  text-align: center;

  .container {
    max-width: 900px;
  }

  hr {
    margin: 40px 0 35px 0;
    border-color: var(--border-color);
  }

  h1 + p {
    margin-top: var(--space-xlg);
  }

  p {
    margin-top: var(--space-sm);
  }
`;

const NotFound = () => {
  const { locale } = useLocale;

  return (
    <>
      <SEO title="404: Not found" />
      <Container>
        <div className="container">
          <h1>
            <Text
              size={7}
              sizeSmall={10}
              sizeMedium={15}
              sizeLarge={21}
              sizeHuge={25}
              fontWeight="var(--weight-bold)"
              isStroke
            >
              Oops!
            </Text>
          </h1>
          <p>
            <Text size={3} sizeSmall={4} sizeMedium={5}>
              <strong>404</strong> -{' '}
              {locale === 'pt' ? 'Página não encontrada.' : 'Page not found.'}
            </Text>
          </p>

          <hr />

          <p>
            <strong>
              {locale === 'pt' ? 'Não se preocupe.' : 'Don´t worry.'}
            </strong>
          </p>

          <>
            {locale === 'pt' ? (
              <p>
                Leia <Link to={localizedLink(`/sobre`, locale)}>sobre mim</Link>
                , confira{' '}
                <Link to={localizedLink(`/blog`, locale)}>meus artigos</Link>,{' '}
                <Link to={localizedLink(`/portfolio`, locale)}>
                  meus projetos
                </Link>{' '}
                e me siga no{' '}
                <a href="https://twitter.com/_diogorodrigues">Twitter</a> e{' '}
                <a href="https://github.com/diogorodrigues">Github</a>. Sinta-se
                a vontade para visitar meu{' '}
                <a href="https://www.linkedin.com/in/diogorodrigues02/">
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
                Read <Link to={localizedLink(`/about`, locale)}>about me</Link>,{' '}
                check out{' '}
                <Link to={localizedLink(`/blog`, locale)}>my articles</Link>,{' '}
                <Link to={localizedLink(`/portfolio`, locale)}>
                  my projects
                </Link>{' '}
                and follow me on{' '}
                <a href="https://twitter.com/_diogorodrigues">Twitter</a> and{' '}
                <a href="https://github.com/diogorodrigues">Github</a>. Feel
                free to visit my{' '}
                <a href="https://www.linkedin.com/in/diogorodrigues02/">
                  Linkedin
                </a>{' '}
                or{' '}
                <Link to={localizedLink(`/contact`, locale)}>contact me</Link>.
              </p>
            )}
          </>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
