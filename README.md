# RMM OCM Component Library

## Todo

- [ ] styled-jsx or a css module port
- [ ] how to get css variables into the project
- [ ] utf characters/icons
- [ ] GH pages for story book
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
