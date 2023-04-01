import React, {
  useRef,
  useState,
  useLayoutEffect,
  MutableRefObject,
  useEffect,
} from 'react';
import AlertTable from '../components/AlertTable/AlertTable';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
];

const AryaBotAlerts: {
  name: string;
  filter: string[];
  date: string;
}[] = [
    {
      name: 'Current Projects by Promoter',
      filter: [
        'Rustomjee',
        'Promoters',
        'RERA Promoters',
        'part3',
        'part4',
        'part5',
      ],
      date: '2021-09-01',
    },
    {
      name: 'RERA Promoters',
      filter: [
        'Rustomjee',
        'Promoters',
        'RERA Promoters',
        'Something ',
        'Mpre Stuffs',
      ],
      date: '2021-09-01',
    },
    {
      name: 'Current Projects by Promoter',
      filter: [
        'Rustomjee',
        'Promoters',
        'RERA Promoters',
        'part3',
        'part4',
        'part5',
      ],
      date: '2021-09-01',
    },
    {
      name: 'RERA Promoters',
      filter: [
        'Rustomjee',
        'Promoters',
        'RERA Promoters',
        'Something ',
        'Mpre Stuffs',
      ],
      date: '2021-09-01',
    },
  ];


function alerts() {
  return (
    <div className='max-w-5xl m-auto pt-5'>
      {/* <AlertTable col={people} rows={AryaBotAlerts} /> */}
      <AlertTable />
    </div>
  );
}

export default alerts;
