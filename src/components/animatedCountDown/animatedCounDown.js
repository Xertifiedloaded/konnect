import React, { useEffect, useRef, useState } from "react";
import classes from "./animatedCountDown.module.css";
const AnimatedCounDown = ({ end }) => {
  const [state, setState] = useState(null);
  const ref = useRef(0);
  const accumulator = end / 200;
  const updateCount = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCount, 50);
  };
  useEffect(() => {
    const isWorking = true;
    if (isWorking) {
      updateCount();
    }
  }, [end]);
  return (
    <>
      <div className={classes.main}>
        <div>Distribution</div>
        <div className={classes.count}>
          <div className={classes.info}>
            <p>{`${state}k`}</p>
            <h6>active wallet</h6>
          </div>
          <div className={classes.info}>
            <p>{`${state}k`}</p>
            <h6>resolved issue</h6>
          </div>
          <div className={classes.info}>
            <p>{`${state}k`}</p>
            <h6>contributors</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCounDown;
