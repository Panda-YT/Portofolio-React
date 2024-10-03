import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const FullPageComponent = () => {
  const box = useRef();
  const circle = useRef();

  useGSAP(() => {
    gsap.to(".circle", {
      rotation: "+=360",
      duration: 3,
      repeat: -1,
      ease: "none"
    });
  });

  return (
    <div className="FullPageComponent">
      <div ref={box} className="box gradient-green">Selector</div>
      <div ref={circle} className="circle gradient-blue">Ref</div>
    </div>
  );
};

export default FullPageComponent;