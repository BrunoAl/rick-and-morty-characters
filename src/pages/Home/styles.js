import { css } from 'styled-components';

export default css`
  .search-forms {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: var(--spacing-ratio-lg) 0;
    border-bottom: 1px solid var(--gray-light);
    padding-bottom: var(--spacing-ratio-lg);

    form {
      margin-bottom: var(--spacing-ratio-xl);
      :last-item {
        margin-bottom: 0;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;

      form {
        margin-bottom: 0;
      }
    }
  }
`;
