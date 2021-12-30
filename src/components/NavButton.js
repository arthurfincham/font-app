import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function NavButton({ children, name, id }) {
  const [isToggled, setToggle] = useState(false);

  const menuAppear = useSpring({
    transform: isToggled ? 'translate3D(0,0,0)' : 'translate3D(0,-40px,0)',
    opacity: isToggled ? 1 : 0,
    position: 'absolute',
  });

  return (
    <div className="relative">
      <animated.button
        className={`p-2  w-24 flex items-center border-black justify-center bg-white font-bold rounded-lg border-4  `}
        onClick={() => setToggle(!isToggled)}
        id={id}
      >
        <p>{name}</p>
      </animated.button>
      <animated.div style={menuAppear}>{isToggled ? children : null}</animated.div>
    </div>
  );
}
