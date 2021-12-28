import { useState } from 'react';

const parts = [
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
];

const getWord = () => parts[Math.floor(Math.random() * parts.length)];
const createName = () => `${getWord()} ${getWord()} ${getWord()} ${getWord()}`;

export default function GenericName() {
  const [name, setName] = useState(createName());
  return (
    <>
      <button
        style={{
          padding: 5,
          marginRight: 15,
          background: '#a0afc054',
          borderRadius: 5,
        }}
        onClick={() => setName(createName())}
      >
        Generate New Generic Name
      </button>
      <b>"{name}"</b>
    </>
  );
}
