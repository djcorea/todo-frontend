import React, { useCallback } from "react";
//import { render } from "https://cdn.skypack.dev/react-dom";
import confetti from "canvas-confetti";

const Confeti= function () {
  const onClick = useCallback(() => {
   

    confetti({
        particleCount: 900,
        spread: -550,
        gravity:10,
        origin: {
            x: 0.5,
            // since they fall down, start a bit higher than random
            y: 0
          }
      });

      confetti({
        particleCount: 900,
        spread: 500,
        gravity:10,
        origin: {
            x: 0,
            // since they fall down, start a bit higher than random
            y: Math.random()
          }
      });

      confetti({
        particleCount: 900,
        spread: 250,
        gravity:10,
        origin: {
            x: 1,
            // since they fall down, start a bit higher than random
            y: Math.random()
          }
      });



  }, []);
onClick();
  return (
    <>
    
      <button className="button" onClick={onClick}>
        <span>🎉</span>
        <span>Like</span>
      </button>
    </>
  );
}

export default Confeti;