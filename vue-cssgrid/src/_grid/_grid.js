import cssEv from 'vue-styled-components'
import * as vars from './_variables'

const propsConfig = {
  padrao: String,
  colunas: String,
  largura: String,
  espaco: String,
  full: String,
  grid: String,
};

export const ContainerFull = cssEv('main', propsConfig)`
  width: ${props => props.full ? props.full : '100%'};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = cssEv('div', propsConfig)`
  max-width: 1360px;
  padding-right: 15px;
  padding-left: 15px; 
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &::before,
  &::after {
    content: " ";
    display: table;
  };
  &::after {
    clear: both;
  };
`;
export const Row = cssEv('div', propsConfig)`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &::before,
  &::after {
    content: "";
    display: table;
  };
  &::after {
    clear: both;
  };
`;
export const Column = cssEv('div', propsConfig)`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: ${props => (props.grid ? props.grid / 12 *100 : '8:33')}%;
  };
`;

export const H1 = cssEv('h1', propsConfig)`
  font-size: ${vars.H1_4K};
  color: ${props => props.padrao ? props.padrao : 'black'};
`;

export const H2 = cssEv('h2', propsConfig)`
  font-size: ${vars.H2_NORMAL};
  color: ${props => props.padrao ? props.padrao : 'black'};
`;
