import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

let size = 100;

export default () => {
  const canvasRef = useRef();
  let i = 0;

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl && gl instanceof WebGLRenderingContext && !/Mobile/i.test(navigator.userAgent)) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: size * 2.1,
        height: size * 2.1,
        phi: 0,
        theta: 0.6,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 100,
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
    } else {
      canvasRef.current.style.width = `0px`;
      canvasRef.current.style.height = `0px`;
    }
  }, []);

  return <canvas ref={canvasRef} style={{ width: size, height: size }} />;
};
