We have 2 types of tables: basic and interactive. Your decision to use one over the other depends on how much control you need over the rendering. Both of these components use flow types.

## Table Component `static/js/components/Table/Table.js`

This component makes no assumptions about the structure of your table.

You should use this component either when you have a super simple static table to be made without some sort of a data structure or if you need extreme control over how a table gets rendered.

### Props

This component provides a styled table wrapper with the standard component props like: qa ids, children, class name, and style overrides. It is completely your responsibility when using this component to write all of the table markup and pass that in as children. In this case, `children` will most likely be an array of a `thead` and a `tbody`.

```javascript
type Props = {
  'data-qa-id'?: DataQaIdType,
  children: Node,
  className?: ClassNameType,
  style?: StyleType,
}
```

### Example Use

```javascript
render() {
  return (
    <Table>
      <thead>
        {/* table head stuff */}
      </thead>
      <tbody>
        {/* table body stuff */}
      </tbody>
    </Table>
  )
}
```

## Interactive Table Component `static/js/components/Table/InteractiveTable.js`

This component is much more opinionated about it's use, but it needs to be in order to provide features like: `sorting`, `text filtering`, and `render overrides`

### Props

This has the standard component props like: qa ids, className, and style overrides, but the rest are pretty specific for use. Let's start with rows and headers. These two are needed to create the most basic of tables. But note they are `NOT` required and will only render if present in props.

#### headers

The header prop is the structure to create your table. You will provide an array of objects representing a table head. The order of the array is the order of your table columns. Each object needs the following props: label, sort, and value.

- **label**: this is what gets rendered in the column header
- **sortable**: this true or false value determines if we allow sorting on that column
- **value**: this is the actual data value associated to that header and directly correlates to properties of each thing that will make up a row in the table
- **defaultSort**: this is a header value from any sortable header. It is used to determine the initial sort of the table. If no default is provided, it will render the rows in the order ther are are provided.

If a header is sortable, a link will be rendered instead of plain text. Clicking the link will either toggle sort direction or set a new sort field and sort ascending.

When the component loads, the headers are used to create a column order. This column order is used to ensure the data in the rows is placed in the correct column.

#### rows and render overrides

Each item in a row needs an id; this will be used for a row key.

This is an array of objects representing the data that gets rendered. They will render whatever values are represented by the header value for a specific column. There is not much special about rows; it's the raw data to be rendered.

Where it gets more interesting, is how we allow the ability for the rendering for a column value to be overridden by an optional render function from a hash. This hash uses the header value as keys and values are render functions. It's important to make sure you correctly pass the values used by this component in an object to simulate props being passed. You can only pass a single prop right now, but we could potentially pass the entire object and let the user do whatever they need.

#### filter keys

This is the last prop you can currently pass and it is an array of strings; it is not required. These presence of this array will determine if the table has a text search above it. The values in this array are going to be the same values you have on a header and the same values you have on each object that makes a row.

```javascript
type Props = {
  'data-qa-id'?: DataQaIdType,
  className?: ClassNameType,
  style?: StyleType,
  filterKeys?: Array<string>,
  defaultSort?: string,
  renderOverride?: {
    [key: string]: Function,
  },
  rows?: Array<{
    id: number,
    [headerKey: string]: any,
  }>,
  headers?: Array<{
    label: string | number,
    sortable: boolean,
    value: string,
  }>,
}
```

### Example Use

```javascript
const stores = [
  {
    created_at: '2019-03-08 04:56:01.964084-08',
    default_locale: 'en_US',
    id: 2,
    locales: ['en_US'],
    name: 'Topanga',
    number_of_forum_displays: 1,
    rollout_number: 'R189',
    screen_types: ['Forum Display', 'Video Wall'],
    timezone: `America/Los_Angeles`,
    updated_at: '2019-03-08 04:56:01.964106-08',
    uuid: '7ec5ce28-d08c-45f6-bfb2-90d72a1f42c0',
    video_wall_height: 1980,
    video_wall_width: 4560,
    visible: true,
  },
  {
    created_at: '2019-03-08 04:56:01.964084-08',
    default_locale: 'en_US',
    id: 3,
    locales: ['en_US'],
    name: 'Promenade Temecula',
    number_of_forum_displays: 1,
    rollout_number: 'R345',
    screen_types: ['Forum Display'],
    timezone: 'America/Los_Angeles',
    updated_at: '2019-03-08 04:56:01.964106-08',
    uuid: 'ef9a248e-e5af-43d0-9b34-a8321be1fadf',
    video_wall_height: null,
    video_wall_width: null,
    visible: true,
  }
]

const rows = stores.map((store) => ({
  ...store,
  locales: store.locales.join(', '),
}))

const headers = [
  { label: 'Name', sort: 'name', sortable: true },
  { label: 'Timezone', sort: 'timezone', sortable: true },
  { label: 'Locales', sort: 'locales', sortable: true },
  { label: 'Default Locale', sort: 'default_locale', sortable: false },
  { label: 'Screen Types', sort: 'screen_types', sortable: false },
  { label: <span>Rollout&nbsp;Number</span>, sort: 'rollout_number', sortable: false },
]

render() {
  const renderOverride = {
    name: ({ name }) => <span>My {name}</span>,
    screen_types: ({ screen_types }) => (
      <span>
        {screen_types.length > 0
          ? screen_types.join(', ')
          : 'No screen types'
        }
      </span>
    ),
    locales: ({ locales }) => <span style={{ color: 'red' }}>{locales}</span>,
  }

  return (
    <InteractiveTable
      defaultSort="name"
      filterKeys={filterKeys}
      headers={headers}
      rows={rows}
      renderOverride={renderOverride}
    />
  )
}
```
