import { useState } from 'react';

const prefix = ['A+', '4.0', 'Ivy', 'SAT', 'ACT', '1600', 'PSAT', 'AP', 'Star'];

const suffix = [
  'Youth',
  'Science',
  'Research',
  'Scholars',
  'Hand',
  'With',
  'Smart',
  'Kids',
  'Varsity',
  'Together',
  'STEM',
  'Children',
  'Education',
  'Student',
  'Startup',
  'EDU',
  'World',
  'Technology',
  'Young',
  'Engineering',
  'Schoolhouse',
  'School',
  'Teacher',
  'Excel',
  'Hicap',
  'Honors',
  'Brain',
  'Best',
  'Class',
  'College',
  'Prep',
  'Expert',
  'Academy',
  'Accelerator',
  'IQ',
  'Intelligent',
  'Einstein',
];

const getPrefix = () => prefix[Math.floor(Math.random() * prefix.length)];
const getSuffix = () => suffix[Math.floor(Math.random() * suffix.length)];
const createName = () => `${getPrefix()} ${getSuffix()} ${getSuffix()} ${getSuffix()}`;

export default function GenericName() {
  const [name, setName] = useState(createName());
  return (
    <>
      <button
        style={{
          padding: 5,
          marginRight: 15,
          background: '#334155',
          color: '#fff',
          borderRadius: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        onClick={() => setName(createName())}
      >
        Generate New Generic Name
      </button>
      <b>"{name}"</b>
    </>
  );
}
