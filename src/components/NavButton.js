import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function NavButton({ children, name }) {
  const [isToggled, setToggle] = useState(false);

  const menuAppear = useSpring({
    transform: isToggled ? 'translate3D(0,0,0)' : 'translate3D(0,-40px,0)',
    opacity: isToggled ? 1 : 0,
    position: 'absolute',
  });

  return (
    <div className="relative">
      <animated.button
        className={`p-2  w-24 flex items-center justify-center font-bold rounded-lg border-4  themeToggleButton`}
        onClick={() => setToggle(!isToggled)}
      >
        <p>{name}</p>
      </animated.button>
      <animated.div onClick={() => setToggle(!isToggled)} style={menuAppear}>
        {isToggled ? children : null}
      </animated.div>
    </div>
  );
}
