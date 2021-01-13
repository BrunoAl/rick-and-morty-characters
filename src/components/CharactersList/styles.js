import { css } from 'styled-components';

export const listStyles = css`
  .list {
    &__items {
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
    }

    &__title {
      display: flex;
      justify-content: center;
      color: var(--white);
      font-size: var(--font-size-lg);
      margin: var(--spacing-ratio-xl) 0;
    }
  }
`;

export const messageStyles = css`
  color: var(--white);
  font-size: var(--font-size-lg);
  position: relative;

  .message {
    flex: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: var(--spacing-ratio-xl);
    margin-bottom: var(--spacing-ratio-xl);
    font-size: var(--font-size-lg);
  }
`;
