import { css } from 'styled-components';

export default css`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--spacing-ratio-lg);
  background-color: var(--gray-primary);
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
