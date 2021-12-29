import { useState, useRef } from 'react';

export default function Hash() {
  const inputRef = useRef();
  const [decoded, setDecoded] = useState({});
  return (
    <div>
      <input
        className="border-red"
        ref={inputRef}
        placeholder="Paste hash"
        style={{
          padding: 5,
          marginRight: 15,
          border: '1px solid #a0afc0',
          borderRadius: 5,
        }}
        onChange={() => {
          try {
            console.log(JSON.parse(atob(inputRef.current.value)));
            setDecoded(JSON.parse(atob(inputRef.current.value)));
          } catch (_err) {
            setDecoded({});
          }
        }}
      />
      {decoded.name && decoded.hours && decoded.time ? (
        <>
          <code>{decoded.name}</code>, <code>{new Date(decoded.time).toLocaleDateString()}</code>,{' '}
          Hours: <code>{decoded.hours}</code>
        </>
      ) : (
        <code>Invalid Hash</code>
      )}
    </div>
  );
}