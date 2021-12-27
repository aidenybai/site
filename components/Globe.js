import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef();
  let size = 69;
  let mouse = 0;
  let inc = 0.01;

  useEffect(() => {
    let i = 0;
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
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 5,
        baseColor: [1, 1, 1],
        markerColor: [123, 117, 212].map((value) => value / 255),
        glowColor: [113, 128, 150].map((value) => value / 255),
        markers: [{ location: [45.5857, -122.4027], size: 0.1 }],
        onRender: (state) => {
          state.phi = i;
          if (mouse === 0) i += inc;
          if (mouse === 1) i += inc / 2;
          if (inc > 0.01) inc /= 1.01;
          else inc = 0.01;
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

  return (
    <canvas
      ref={canvasRef}
      title="Click me to spin the globe faster!"
      onMouseOut={() => (mouse = 0)}
      onMouseOver={() => (mouse = 1)}
      onClick={() => (inc *= 2)}
      style={{ width: size, height: size, marginBottom: 15 }}
    />
  );
}
