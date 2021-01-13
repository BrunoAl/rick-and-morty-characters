import { css } from 'styled-components';

export default css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .title {
    position: absolute;
    font-size: var(--font-size-xlg);
    font-weight: 900;
    color: var(--gray-primary);
    text-align: center;
  }

  svg {
    fill: var(--white);
  }
`;
