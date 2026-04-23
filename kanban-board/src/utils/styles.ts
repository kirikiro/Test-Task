import { css } from 'styled-components';

export const getTransition = (
  duration = 300,
  property: string[] | string = ['background-color', 'border-color', 'color', 'transform'],
  animation = 'ease'
) => css`
  transition-property: ${Array.isArray(property) ? property.join(', ') : property};
  transition-duration: ${duration}ms;
  transition-timing-function: ${animation};
`;