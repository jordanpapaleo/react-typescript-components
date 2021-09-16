## Example Use

```javascript
import * as rmmOcmLib from 'rmm-ocm-component-library'
const { components } = rmmOcmLib

const SomeComponent = () => (
  <components.Calendar
    onClick={(value) => {
      console.log(value, value instanceof Date)
    }}
  />
)
```
