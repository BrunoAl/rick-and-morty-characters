import { css } from 'styled-components';

export default css`
  display: flex;
  flex-direction: column;
  color: var(--white);
  max-width: 30rem;
  margin-right: var(--spacing-ratio-lg);
  font-size: var(--font-size-md);
  font-weight: 600;

  @media (min-width: 768px) {
    :last-child {
      margin-right: 0;
    }
  }

  .form {
    &__input-example {
      font-size: var(--font-size-sm);
      font-weight: 400;
      margin-top: var(--spacing-ratio-sm);
    }

    &__submit-button {
      height: 4rem;
      width: 14rem;
      background-color: var(--gray-secondary);
      border-radius: var(--border-ratio-lg);
      border: none;
      color: var(--white);
      font-size: var(--font-size-md);
      margin-top: var(--spacing-ratio-md);
      cursor: pointer;

      :hover,
      :focus {
        background: var(--green);
      }
    }

    &__input {
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid var(--green);
      font-size: var(--font-size-md);
      color: var(--white);
      padding: 7px 0;
      background: transparent;

      &::placeholder {
        color: transparent;
      }

      &:placeholder-shown ~ .form__label {
        font-size: var(--font-size-md);
        cursor: text;
        top: 20px;
      }

      :focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: var(--white);
        border-image-slice: 1;
      }
    }
  }
`;
