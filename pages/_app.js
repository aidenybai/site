import 'nextra-theme-blog/style.css';
import '../styles/main.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <canvas id="canvas"></canvas>
      <Component {...pageProps} />
    </>
  );
}
