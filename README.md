# Rick and Morty case

## Instruction

```sh
    to run the project: yarn && yarn start
    to run the tests: yarn test
```

deployed version: https://zen-jones-533c85.netlify.app/

## Rules

- Show all characters that exist (or are last seen) in a given dimension
- Show all characters that exist (or are last seen) at a given location
- Show all characters that partake in a given episode
- Showing all information of a character (Name, species, gender, last location, dimension, etc)

## Stack

- React
- Testing React Library
- Jest
- Styled components

## TODO

- Create a better UI for the form to search the characters, maybe a tab component to render which one separately.
- <del>Mock every API call and build integration tests to handle the search forms and characters list.</del> (DONE)
- Paginate the characters list.
- There's not enough contrast between the colors, since this is important for a11y, I would have chosen different colors for a production website.
- Create a single function to fetch data.
