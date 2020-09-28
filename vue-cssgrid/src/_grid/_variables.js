import { injectGlobal } from 'vue-styled-components'

injectGlobal`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
/* HTML5 display reset */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

//mixins 
//convert px em rem
export const rem = (number) => {
  let converte = number;
  converte = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
  converte = parseFloat(converte);

  return `${converte / 16}rem`; // Tamanho da font padrão
};
// fim do mixins

// CORES
export const COLOR_WHITE = '#FFFFFF';
export const COLOR_BLACK = '#222222';
export const COLOR_GREY = '#777777';
export const COLOR_GREY_LIGHT = '#dbdbdb';
export const COLOR_GREY_LIGHTER = '#f5f5f5';
export const COLOR_GREY_BLACK = '#909090';
export const COLOR_PURPLE = '#9F2AFF';
export const COLOR_PINK = '#D82482';
export const COLOR_YELLOW = '#ffd700';
export const COLOR_YELLOW_LIGHT = '#F6DA47';
export const COLOR_ORANGE = '#f8562c';
export const COLOR_GREEN = '#00d213';
export const COLOR_BLUE = '#00BAF7';

export const H1_4K = `${rem(54)}`;
export const H1_NORMAL = `${rem(40)}`;
export const H1_MEDIUM = `${rem(30)}`;

export const H2_NORMAL = `${rem(24)}`;
export const H3_NORMAL = `${rem(18)}`;
export const H4_NORMAL = `${rem(16)}`;
export const H5_NORMAL = `${rem(14)}`;
export const H6_NORMAL = `${rem(12)}`;

//FIM DAS CORES

const globalStyles = injectGlobal``;

export default globalStyles
