# RMM OCM Component Library

## Local development
Clone the project, install dependencies, and start it.

```bash
yarn && yarn start
```

You will notice that the start command actually starts storybook.  This is intentional as there is not a web application associated to this repo.

### Creating new content
We use hygen template to create all of our content for consistency.  Doing this will scaffold your work and ensure the new content is apart of the build.  It is highly recommended that you build content this way.

- `yarn new:common` creates a service in the common directory
- `yarn new:component` creates a new component in the component directory
- `yarn new:hook`  creates a new hook in the hook directory

## How to test locally
### Testing the built package

> This step is important to see exactly what we are exposing in a build.  Add entries to `.npmignore ` to keep them out of the final package

To create a built package like the one people will install you can use the `yarn pack` feature. Or even better you can run `yarn build:pack` to create the `tgz` file, unpack it and delete the `tgz` file.  The newly created package can be found in `rmm-ocm-package`.

### Testing using the package

Testing the package is cool and all but what you really want to do is use the package while you are developing it.

You can create a new project and use this codebase as a npm package.  To do this, you will need a different react app running locally.

Run `yarn link` in this repository.  The result of this command will have a command to run in your other local react app.  Run the command in the other app.  Now the test app will reference this app.  Remember that you have to run `yarn build` to see the changes as the test app is looking at the list directory.

## Todo
- [x] styled-jsx or a css module port
- [x] yarn pack —out rmm-ocm-package.tgz
- [x] how to get css variables into the project
- [ ] Icons
- [ ] GH pages for story book
- [ ] setup apple npm stuff
- [ ] Verify preversion version stuff
- [ ] setup publish flow

```
yarn login
yarn build
yarn publish
```


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


#theorem/apple
