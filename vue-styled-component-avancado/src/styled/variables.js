import { injectGlobal } from 'vue-styled-components'

// COLORS
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

export const H1_4K = '54px';
export const H1_NORMAL = '40px';
export const H1_MEDIUM = '30px';

export const H2_NORMAL = '24px';
export const H3_NORMAL = '18px';
export const H4_NORMAL = '16px';
export const H5_NORMAL = '14px';
export const H6_NORMAL = '12px';

export const rem = (number) => {
    let tmp = number;
    tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
    tmp = parseFloat(tmp);

    return `${tmp / 16}rem`; // Tamanho da font
  };


const globalStyles = injectGlobal`


`;


export default globalStyles
