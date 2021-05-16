import { css } from 'styled-components';

export const flexSet = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

const Theme = {
  flexSet,
};

export default Theme;