import useGameOfLife from 'use-game-of-life';
import { useState } from 'react';

export const GameOfLife = ({
  updateInterval,
  gridRows,
  gridColumns,
  randomizeGrid,
  randomGridAlivePercent,
}) => {
  const [mounted, setMounted] = useState(false);
  const { grid, setCell, start } = useGameOfLife({
    updateInterval,
    gridRows,
    gridColumns,
    randomizeGrid,
    randomGridAlivePercent,
  });

  const mount = () => {
    setMounted(true);
    start();
  };

  return (
    <>
      {!mounted && mount()}
      <div className="game" title="Conway's Game of Life">
        {grid.map((row, r) =>
          row.map((_, c) => (
            <div
              key={`${r}-${c}`}
              className={grid[r][c] ? 'alive' : undefined}
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
