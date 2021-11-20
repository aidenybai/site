import dynamic from 'next/dynamic';
const Tetris = dynamic(() => import('react-tetris'), { ssr: false });

export default () => (
  <Tetris
    keyboardControls={{
      down: 'MOVE_DOWN',
      left: 'MOVE_LEFT',
      right: 'MOVE_RIGHT',
      space: 'HARD_DROP',
      z: 'FLIP_COUNTERCLOCKWISE',
      x: 'FLIP_CLOCKWISE',
      up: 'FLIP_CLOCKWISE',
      p: 'TOGGLE_PAUSE',
      c: 'HOLD',
      shift: 'HOLD',
    }}
  >
    {({ Gameboard }) => (
      <div>
        <Gameboard />
      </div>
    )}
  </Tetris>
);
