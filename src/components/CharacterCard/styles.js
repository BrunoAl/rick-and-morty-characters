import { css } from 'styled-components';

export default css`
  display: flex;
  color: var(--white);
  max-width: 60rem;
  width: 100%;
  height: 26rem;
  background-color: var(--gray-secondary);
  border-radius: var(--border-ratio-md);
  overflow: hidden;
  font-weight: 600;

  .card {
    &__image img {
      width: 26rem;
    }

    &__info {
      margin-left: var(--spacing-ratio-lg);
      font-size: var(--font-size-md);

      h2 {
        font-size: var(--font-size-lg);
        font-weight: 900;
        margin-bottom: 0;
        margin-top: var(--spacing-ratio-md);
      }

      &-section-title {
        color: var(--gray-light);
        display: block;
      }
    }

    &__status {
      display: inline-block;
      margin-bottom: var(--spacing-ratio-md);
    }

    &__section {
      margin-bottom: var(--spacing-ratio-md);
    }
  }
`;
