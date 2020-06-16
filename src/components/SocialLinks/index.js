import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://github.com/diogorodrigues/"
          title="Github"
          target="_blank"
        >
          <Github />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://twitter.com/_diogorodrigues"
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://www.linkedin.com/in/diogorodrigues02"
          title="Linkedin"
          target="_blank"
        >
          <Linkedin />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
