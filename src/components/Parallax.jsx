import { ParallaxBanner } from 'react-scroll-parallax';

export default function Parallax({ style, image, children }) {
  const parallaxStyle = { ...style, height: '100vh', aspectRatio: '2/1' };
  const layers = [{ image, speed: -30 }];

  return (
    <ParallaxBanner style={parallaxStyle} layers={layers}>
      {children}
    </ParallaxBanner>
  );
}
