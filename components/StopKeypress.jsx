import { useEffect } from 'react';

export const StopKeypress = () => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
      }
    });
  });

  return <span></span>;
};
