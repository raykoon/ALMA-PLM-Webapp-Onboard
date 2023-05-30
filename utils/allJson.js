//styles详情页左侧部分表格数据

export const dataSource = [
  {
    key: '1',
    name: 'Style Nº',
    age: 'SS23888',
  },
  {
    key: '2',
    name: 'Target season',
    age: 'SS 2023',
  },
  {
    key: '3',
    name: 'Target season',
    age: 'SS 2023',
  },
  {
    key: '4',
    name: 'Target season',
    age: '',
    type: 3,
  },
  {
    key: '5',
    name: 'Target season',
    age: 'Sample requested',
    isTime: '2 days ago',
  },
  {
    key: '6',
    name: 'Development stage',
    age: '',
    type: 4,
  },
];

export const dataSource1 = [
  {
    key: '1',
    name: 'Designer',
    age: 'Becca Yang',
    color: '#7651F0',
    value: 'BY',
    type: 2,
  },
  {
    key: '2',
    name: 'PD',
    age: 'Lindsay Fiegleman',
    color: '#00A3FF',
    value: 'LF',
    type: 2,
  },
  {
    key: '3',
    name: 'Production',
    age: 'Andrea Salvucci',
    color: '#F19100',
    value: 'AS',
    type: 2,
  },
  {
    key: '4',
    name: 'Tech',
    age: 'Ann Wu',
    color: '#00C673',
    value: 'AW',
    type: 2,
  },
  {
    key: '5',
    name: 'Buyer',
    age: 'Lindsay Fiegleman',
    color: '#00A3FF',
    value: 'LF',
    type: 2,
  },
  {
    key: '6',
    name: 'Agent',
    age: 'Ann Wu',
    value: 'AW',
    type: 1,
    color: '#00C673',
  },
  {
    key: '7',
    name: 'Factory',
    age: '-',
    value: '',
    type: 1,
    isBtn: true,
  },
];

export const dataSource2 = [
  {
    key: '1',
    name: 'Main Fabric #',
    age: '888',
  },
  {
    key: '2',
    name: 'Main Fabric Name',
    age: 'CRINKLE RAYON',
  },
  {
    key: '3',
    name: 'Target season',
    age: 'SS 2023',
  },
  {
    key: '4',
    name: 'Target season',
    age: 'SS 2023',
  },
  {
    key: '5',
    name: 'Button',
    age: '-',
  },
];

export const dfFilter = [
  //下拉筛选数据1
  {
    text: <span>All Stages</span>,
    value: 'All Stages',
  },
  {
    text: <span>Pre-Dev</span>,
    value: 'Pre-Dev',
    color: 'rgb(118,81,240)',
  },
  {
    text: <span>In-Dev</span>,
    value: 'In-Dev',
    color: '#00A3FF',
  },
  {
    text: <span>Dropped</span>,
    value: 'Dropped',
    color: '#FF7394',
  },
  {
    text: <span>Adopted</span>,
    value: 'Adopted',
    color: '#13DE89',
  },
  {
    text: <span>In Production</span>,
    value: 'In Production',
  },
];

export const dfFilter2 = [
  //下拉筛选数据2
  {
    text: <span>Designer</span>,
    value: 'Becca Yang',
    color: '#7651F0',
    title: 'BY',
  },
  {
    text: <span>Product </span>,
    value: 'Lindsay ',
    color: '#00A3FF',
    title: 'LF',
  },

  {
    text: <span>Production</span>,
    value: 'Andrea Salvucci',
    color: '#F19100',
    title: 'AS',
  },
  {
    text: <span>Tech</span>,
    value: 'Ann Wu',
    color: '#00C673',
    title: 'AW',
  },
];

export const dfFilter3 = [
  //下拉筛选数据2
  {
    text: <span>Design</span>,
    value: 'Design',
    color: '#FF7394',
    bgcolor: 'rgba(255, 115, 148, 0.1)',
    title: 'BY',
  },
  {
    text: <span>Development </span>,
    value: 'Development ',
    bgcolor: 'rgba(0, 163, 255, 0.1)',
    title: 'LF',
    color: '#00A3FF',
  },

  {
    text: <span>Adopted</span>,
    value: 'Adopted',
    bgcolor: 'rgba(19, 222, 137, 0.1)',
    title: 'AS',
    color: '#00C773',
  },
  {
    text: <span>Cancelled / Inactive</span>,
    value: 'Cancelled / Inactive',
    color: 'rgba(0, 0, 0, 0.3)',
    title: 'AW',
    bgcolor: 'rgba(0, 0, 0, 0.05)',
  },
];

export const LISTdata = [
  //STYLES LIST模式下初始的数据
  {
    key: '1',
    name: 'Style Name',
    style: 'SS23888',
    Target: 'SS 2023',
    color: '#7651F0',
    Product: 'DRESSES',
    sx: 'BY',

    Development: 1,
    Fabric: '7B - COTTON JERSEY',
    Vendor: '044405 - ASTR (NA)',
    Purchase: '',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Style Name',
    style: 'SS23888',
    Target: 'SS 2023',
    Product: 'DRESSES',
    Development: 2,
    color: '#7651F0',
    sx: 'BY',

    Fabric: '7B - COTTON JERSEY',
    Vendor: '044405 - ASTR (NA)',
    Purchase: '',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Style Name',
    style: 'SS23888',
    Target: 'SS 2023',
    Product: 'DRESSES',
    Development: 3,
    color: '#00A3FF',
    sx: 'LF',
    Fabric: '7B - COTTON JERSEY',
    Vendor: '044405 - ASTR (NA)',
    Purchase: '',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Style Name',
    style: 'SS23888',
    Target: 'SS 2023',
    Product: 'DRESSES',
    Development: 4,
    Fabric: '7B - COTTON JERSEY',
    color: '#00A3FF',
    sx: 'LF',

    Vendor: '044405 - ASTR (NA)',
    Purchase: '',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Style Name',
    style: 'SS23888',
    Target: 'SS 2023',
    sx: 'LF',

    Product: 'DRESSES',
    Development: 5,
    Fabric: '7B - COTTON JERSEY',
    color: '#00A3FF',

    Vendor: '044405 - ASTR (NA)',
    Purchase: '',
    address: 'New York No. 1 Lake Park',
  },
];

export const personNameList = [
  //需要回复的人名列表
  'Lindsay Fiegleman',
  'STAFF JERSEY',
  'Becca Yang',
];

export const ICON =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjEzLjMzMyw4NS4zMzNWMEwxMDYuNjY3LDEwNi42NjdsMTA2LjY2NywxMDYuNjY3VjEyOGM3MC43MiwwLDEyOCw1Ny4yOCwxMjgsMTI4cy01Ny4yOCwxMjgtMTI4LDEyOHMtMTI4LTU3LjI4LTEyOC0xMjgNCgkJCUg0Mi42NjdjMCw5NC4yOTMsNzYuMzczLDE3MC42NjcsMTcwLjY2NywxNzAuNjY3UzM4NCwzNTAuMjkzLDM4NCwyNTZTMzA3LjYyNyw4NS4zMzMsMjEzLjMzMyw4NS4zMzN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

