import { useEffect } from 'react';
import ChromeDinoGame from 'react-chrome-dino';

export const Dino = () => {
  useEffect(() => {
    if (!window.onkeydown) {
      window.onkeydown = (event) => {
        if (event.key === 'Space' && event.target === document.body) {
          event.preventDefault();
        }
      };
    }
  }, []);

  return (
    <div className="dino">
      <ChromeDinoGame />
    </div>
  );
};
