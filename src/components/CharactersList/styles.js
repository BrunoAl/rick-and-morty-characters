import { css } from 'styled-components';

export const listStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: var(--spacing-ratio-lg);
  background-color: var(--gray-primary);
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const messageStyles = css`
  color: var(--white);
  font-size: var(--font-size-lg);
  position: relative;

  h4 {
    flex: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: var(--spacing-ratio-xl);
  }
`;
