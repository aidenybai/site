import { useEffect } from 'react';
import ChromeDinoGame from 'react-chrome-dino';

export const Dino = () => {
  useEffect(() => {
    if (!window.onkeydown) {
      window.onkeydown = (event) => {
        console.log(event.key);
        if (event.key === ' ' && event.target === document.body) {
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
