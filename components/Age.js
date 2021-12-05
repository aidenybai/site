import { useState, useEffect, useRef } from 'react';

import dayjs from 'dayjs';

const bday = dayjs('01/05/2005');

const yearsSince = (date) => {
  const roundPlaces = 9;
  const value = String(
    Math.round(dayjs().diff(date, 'years', true) * Math.pow(10, roundPlaces)) /
      Math.pow(10, roundPlaces),
  );
  const lack = 12 - String(value).length;
  return lack === 0 ? value : `${value}${'0'.repeat(lack)}`;
};

export default function Age() {
  const forceUpdate = useForceUpdate();

  useInterval(() => {
    forceUpdate();
  }, 1);

  return <code>`{yearsSince(bday)}`</code>;
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
