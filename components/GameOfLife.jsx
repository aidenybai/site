import useGameOfLife from 'use-game-of-life';
import { useState } from 'react';

export const GameOfLife = ({
  updateInterval,
  gridRows,
  gridColumns,
  randomizeGrid,
  randomGridAlivePercent,
}) => {
  const { grid, setCell, start } = useGameOfLife({
    updateInterval,
    gridRows,
    gridColumns,
    randomizeGrid,
    randomGridAlivePercent,
  });

  const [mounted, setMounted] = useState(false);

  const mount = () => {
    start();
    setMounted(true);
  };

  return (
    <>
      {!mounted && mount()}
      <div
        className="App"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(50 , 1fr)',
          gridAutoRows: '13px',
        }}
      >
        {grid.map((row, r) =>
          row.map((_col, c) => (
            <div
              key={`${r}-${c}`}
              style={{
                backgroundColor: grid[r][c] ? '#e2e8f0' : undefined,
              }}
              onClick={() => {
                setCell(r, c, !grid[r][c]);
              }}
            />
          )),
        )}
      </div>
    </>
  );
};
