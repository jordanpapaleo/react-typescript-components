import React from 'react'
import Table from './Table'
import InteractiveTable from './InteractiveTable'
import notes from './table.md'

export default {
  title: 'Components/Table',
  component: Table,
  parameters: { docs: { description: { component: notes } } },
  argTypes: {},
}

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
    timezone: 'America/Los_Angeles',
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
  },
  {
    created_at: '2019-03-08 04:56:01.964084-08',
    default_locale: 'fr_FR',
    id: 4,
    locales: ['fr_FR'],
    name: 'Carré Sénart',
    number_of_forum_displays: 1,
    rollout_number: 'R438',
    screen_types: ['Forum Display'],
    timezone: 'Europe/Paris',
    updated_at: '2019-03-13 00:00:20.593341-07',
    uuid: '26625295-1656-4925-8c22-0f0dab8daf08',
    video_wall_height: null,
    video_wall_width: null,
    visible: true,
  },
  {
    id: 5,
    uuid: '36aeacb8-54e7-4141-b7d2-33ddfdaa4433',
    number_of_forum_displays: 1,
    default_locale: 'es_ES',
    rollout_number: 'R435',
    video_wall_width: null,
    locales: ['es_ES'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'Europe/Madrid',
    name: 'Gran Plaza 2',
    video_wall_height: null,
  },
  {
    id: 6,
    uuid: '5b2bf628-d02e-4bf7-92f1-5c92a1c5e3ee',
    number_of_forum_displays: 1,
    default_locale: 'en_US',
    rollout_number: 'R549',
    video_wall_width: null,
    locales: ['en_US'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'America/New_York',
    name: 'Quaker Bridge',
    video_wall_height: null,
  },
  {
    id: 7,
    uuid: '29907475-3eb1-44d0-b444-498effe32e59',
    number_of_forum_displays: 1,
    default_locale: 'it_IT',
    rollout_number: 'R418',
    video_wall_width: null,
    locales: ['it_IT'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-13 00:00:20.624256-07',
    timezone: 'Europe/Rome',
    name: 'Oriocenter',
    video_wall_height: null,
  },
  {
    id: 8,
    uuid: '5129c425-27ab-43a6-87dd-0dd6a52db621',
    number_of_forum_displays: 1,
    default_locale: 'zh_CN',
    rollout_number: 'R390',
    video_wall_width: null,
    locales: ['zh_CN'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-13 00:00:20.645131-07',
    timezone: 'Asia/Shanghai',
    name: 'Hong Kong Plaza',
    video_wall_height: null,
  },
  {
    id: 9,
    uuid: 'e5ec5650-0d12-4243-962c-c4f032818906',
    number_of_forum_displays: 1,
    default_locale: 'zh_CN',
    rollout_number: 'R572',
    video_wall_width: null,
    locales: ['zh_CN'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-13 00:00:20.648063-07',
    timezone: 'Asia/Shanghai',
    name: 'MixC Zhengzhou',
    video_wall_height: null,
  },
  {
    id: 10,
    uuid: 'c67f5867-d358-48f9-aecb-ad5b1cd657a6',
    number_of_forum_displays: 1,
    default_locale: 'en_US',
    rollout_number: 'R106',
    video_wall_width: null,
    locales: ['en_US'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'America/Los_Angeles',
    name: 'Southcenter',
    video_wall_height: null,
  },
  {
    id: 11,
    uuid: '83781041-b934-4003-9c64-f3292d916eb8',
    number_of_forum_displays: 1,
    default_locale: 'es_ES',
    rollout_number: 'R538',
    video_wall_width: null,
    locales: ['es_ES'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'Europe/Madrid',
    name: 'Río Shopping',
    video_wall_height: null,
  },
  {
    id: 12,
    uuid: '8ca4bbfb-f729-4c4d-b910-b8c682552d20',
    number_of_forum_displays: 1,
    default_locale: 'en_US',
    rollout_number: 'RD111',
    video_wall_width: null,
    locales: ['en_US'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: [],
    visible: false,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'America/Los_Angeles',
    name: 'Sunnyvale',
    video_wall_height: null,
  },
  {
    id: 13,
    uuid: '5fa5c1a9-d7ac-4ba9-a993-e004ec5a6791',
    number_of_forum_displays: 1,
    default_locale: 'en_US',
    rollout_number: 'R338',
    video_wall_width: null,
    locales: ['en_US'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'America/Denver',
    name: 'The Promenade Shops at Briargate',
    video_wall_height: null,
  },
  {
    id: 14,
    uuid: '81f76727-e98c-4853-a022-a726ee74d3f3',
    number_of_forum_displays: 1,
    default_locale: 'en_US',
    rollout_number: 'R324',
    video_wall_width: null,
    locales: ['en_US'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'America/Chicago',
    name: 'Renaissance at Colony Park',
    video_wall_height: null,
  },
  {
    id: 15,
    uuid: '1d8d4b64-ff8a-4afe-bb0e-6b94a52ea1c9',
    number_of_forum_displays: 1,
    default_locale: 'en_GB',
    rollout_number: 'R372',
    video_wall_width: null,
    locales: ['en_GB'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'Europe/London',
    name: 'Trinity Leeds',
    video_wall_height: null,
  },
  {
    id: 16,
    uuid: '15ce723d-5a49-422d-acd1-9d12966707d9',
    number_of_forum_displays: 1,
    default_locale: 'it_IT',
    rollout_number: 'R449',
    video_wall_width: null,
    locales: ['it_IT'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: ['Forum Display'],
    visible: true,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'Europe/Rome',
    name: 'I Gigli',
    video_wall_height: null,
  },
  {
    id: 17,
    uuid: '997dd4bb-031a-4eb7-b4d6-e5e873a63e88',
    number_of_forum_displays: 1,
    default_locale: 'zh_HK',
    rollout_number: 'R22222',
    video_wall_width: null,
    locales: ['en_HK', 'zh_HK'],
    created_at: '2019-03-08 04:56:01.964084-08',
    screen_types: [],
    visible: false,
    updated_at: '2019-03-08 04:56:01.964106-08',
    timezone: 'Asia/Hong_Kong',
    name: 'Kong',
    video_wall_height: null,
  },
]

const rows = stores.map((store) => ({
  ...store,
  locales: store.locales.join(', '),
}))

const headers = [
  { label: 'Name', value: 'name', sortable: true },
  { label: 'Timezone', value: 'timezone', sortable: true },
  { label: 'Locales', value: 'locales', sortable: true },
  { label: 'Default Locale', value: 'default_locale', sortable: false },
  { label: 'Screen Types', value: 'screen_types', sortable: false },
  {
    label: <span>Rollout&nbsp;Number</span>,
    value: 'rollout_number',
    sortable: false,
  },
]

const filterKeys = ['name', 'locales', 'timezone']
const columnOrder = Object.keys(stores[0])

export const BasicTable = () => (
  <Table>
    <thead>
      <tr>
        {columnOrder.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {stores.map((row) => (
        <tr key={row.id}>
          {columnOrder.map((column) => (
            <td key={column}>{row[column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
)

export const HeadlessTable = () => (
  <Table>
    <tbody>
      {stores.map((row) => (
        <tr key={row.id}>
          {columnOrder.map((column) => (
            <td key={column}>{row[column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
)

export const InteractiveTableExample = () => (
  <InteractiveTable
    defaultSort="name"
    filterKeys={filterKeys}
    headers={headers}
    rows={rows}
  />
)

export const InteractiveTableRenderOverrides = () => {
  const renderOverride = {
    name: ({ row, rowIndex }) => rowIndex % 2 !== 0 ? 'My Tonchis' : `My store, ${row.name}`,
    screen_types: ({ row }) => (
      <span>
        {row.screen_types.length > 0 ? row.screen_types.join(', ') : 'No screen types'}
      </span>
    ),
    locales: ({ row }) => <span style={{ color: 'red' }}>{row.locales}</span>,
  }

  return (
    <InteractiveTable
      defaultSort="name"
      filterKeys={filterKeys}
      headers={headers}
      rows={rows.filter((_, i) => i < 10)}
      renderOverride={renderOverride}
    />
  )
}
