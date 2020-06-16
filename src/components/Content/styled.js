import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.section`
  margin: auto;
  padding: 0 0 var(--space-lg) 0;
  max-width: var(--width-content);
  ${media.lessThan('medium')`
    font-size: var(--text-normal);
  `}

  & > *:first-child {
    margin-top: 0 !important;
  }

  & > *:last-child {
    margin-bottom: 0 !important;
  }

  .content {
    ${media.greaterThan('medium')`
      padding-left: 100px;
    `}
    ${media.greaterThan('large')`
      padding-left: 200px;
    `}
  }

  .media {
    ${media.greaterThan('medium')`
      margin-left: -100px;
    `}
    ${media.greaterThan('large')`
      margin-left: -200px;
    `}
    img {
      width: 100%;
    }
  }

  .title,
  .subtitle {
    ${media.greaterThan('medium')`
      margin-left: -35px;
    `}
    ${media.greaterThan('large')`
      margin-left: -100px;
    `}
    ${media.greaterThan('huge')`
      margin-left: -150px;
    `}
  }

  iframe {
    width: 100%;
    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    padding: 0;
    text-decoration: none;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 3px),
      var(--secondary-color) calc(50% - 3px),
      var(--primary-color) 100%
    );
    transition: background-position 120ms ease-in-out, padding 120ms ease-in-out;
    background-size: 100% 210%;
    background-position: 0 0;
    word-break: break-word;

    &:hover {
      background-position: 0 15%;
    }

    &.absent {
      color: #cc0000;
    }

    &.anchor {
      display: block;
      padding-left: 30px;
      margin-left: -30px;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }
  }

  strong {
    font-weight: var(--weight-semibold);
  }

  em {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--space-xlg) 0 var(--space-lg);
    -webkit-font-smoothing: antialiased;
    font-weight: var(--weight-normal);
    font-family: var(--family-secondary);
    line-height: 140%;
    ${media.greaterThan('medium')`
      margin: calc(var(--space-xlg)*2) 0 var(--space-lg);
    `}

    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    &:hover a.anchor {
      text-decoration: none;
    }

    tt,
    code {
      font-size: inherit;
    }
  }

  h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 {
    font-size: var(--text-large);
    ${media.greaterThan('medium')`
      font-size: calc(var(--text-xlarge) * 1.5);
    `}
  }

  h2 {
    font-size: var(--text-large);
    ${media.greaterThan('large')`
      font-size: var(--text-xlarge);
    `}
  }

  h3 {
    font-size: var(--text-medium);
    ${media.greaterThan('large')`
      font-size: var(--text-large);
    `}
  }

  h4 {
    font-size: var(--text-normal);
    ${media.greaterThan('large')`
      font-size: var(--text-medium);
    `}
  }

  h5 {
    font-size: var(--text-normal);
  }

  h6 {
    font-size: var(--text-small);
  }

  h3,
  h4,
  h5,
  h6 {
    color: var(--body-color);
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: var(--space) 0;
  }

  .text-hilight {
    font-size: 150%;
    margin: var(--space-lg) 0;
    line-height: 150%;
  }

  hr {
    height: 1px;
    background-color: var(--border-color);
    border: 0;
    margin: calc(var(--space-lg) * 2) 0;
  }

  & > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  & > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  & > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  & > h3:first-child,
  & > h4:first-child,
  & > h5:first-child,
  & > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  dl {
    padding: 0;

    dt {
      font-size: 14px;
      font-weight: var(--weight-semibold);
      font-style: italic;
      padding: 0;
      margin: 15px 0 5px;

      &:first-child {
        padding: 0;
      }

      & > :first-child {
        margin-top: 0;
      }

      & > :last-child {
        margin-bottom: 0;
      }

      dd {
        margin: 0 0 15px;
        padding: 0 15px;

        & > :first-child {
          margin-top: 0;
        }

        & :last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  blockquote {
    border-left: 7px solid var(--primary-color);
    padding: 0 15px;
    font-weight: normal;
    margin: var(--space) 0 var(--space) var(--space);
    color: var(--text-color-light);
    /* font-style: italic; */
    font-size: 120%;
    line-height: 160%;
    ${media.greaterThan('small')`
    margin: var(--space-lg) 0 var(--space-lg) 0;
    `}
    ${media.greaterThan('medium')`
      margin: calc(var(--space-lg)*2) 0 calc(var(--space-lg)*2) 0;
    `}

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  table {
    padding: 0;

    tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0;

      &:nth-child(2n) {
        background-color: #f8f8f8;
      }

      th {
        font-weight: var(--weight-semibold);
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }

      th:first-child,
      td:first-child {
        margin-top: 0;
      }

      th:last-child,
      td:last-child {
        margin-bottom: 0;
      }
    }
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  .gatsby-resp-image-wrapper {
    margin: calc(var(--space-lg) * 2) 0 !important;
  }

  span.frame {
    display: block;
    overflow: hidden;

    & > span {
      border: 1px solid #dddddd;
      display: block;
      float: left;
      overflow: hidden;
      margin: 13px 0 0;
      padding: 7px;
      width: auto;

      img {
        display: block;
        float: left;
      }

      span {
        clear: both;
        color: #333333;
        display: block;
        padding: 5px 0 0;
      }
    }
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }

  .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;

    code,
    tt {
      background-color: transparent;
      border: none;
    }
  }
`;
