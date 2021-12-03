import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

const size = 100;

export default () => {
  const canvasRef = useRef();

  useEffect(() => {
    let i = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.6,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 4000,
      mapBrightness: 10,
      baseColor: [1, 1, 1],
      markerColor: [246 / 255, 109 / 255, 87 / 255],
      glowColor: [113 / 255, 128 / 255, 150 / 255],
      markers: [{ location: [45.5857, -122.4027], size: 0.1 }],
      onRender: (state) => {
        state.phi = Math.tan(i);
        state.dark = 0.75 * Math.sin(0.75 * i);
        i += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: size, height: size, left: 0 }} />;
};
