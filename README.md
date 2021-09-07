# RMM OCM Component Library

**yarn test**
- runs linting
- checks types
- runs unit tests

**yarn build**
- remves dist directory
- runs tests
- creates the dist directory

**yarn pack**

## New content

> USE THE NPM COMMANDS

These commands will scaffold out all of the needed folders and add their imports to the correct files for the library.

- `yarn run new:common` Used to create new a common js utility and story
- `yarn run new:component` Used to create a new component and story
- `yarn run new:hook` Used tp create a new hook and story

## Todo

- [x] styled-jsx or a css module port
- [x] yarn pack --out rmm-ocm-package.tgz
- [ ] how to get css variables into the project
- [ ] GH pages for story book
- [ ] utf characters/icons
- [ ] setup apple npm stuff

## TypeScript Notes

- “always use interface for public API’s definition when authoring a library or 3rd-party ambient type definitions.”
- “consider using type for your React Component Props and State, because it is more constrained.”

```javascript
import * as React from 'react'

interface Props {
  name: string;
  color: string;
}

// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

type OtherProps = {
  name: string;
  color: string;
}

// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>

```


## Links

- https://github.com/typescript-cheatsheets/react
- https://www.sitepen.com/blog/typescript-cheat-sheet


```
yarn pack
tar -xzf jp-scroller-v0.1.0.tgz
yarn link
```

```
yarn login
yarn build
yarn publish
```
