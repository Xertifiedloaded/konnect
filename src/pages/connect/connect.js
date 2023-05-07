import { useState } from "react";
import { Tab } from "../../constant";
import classes from "./connect.module.css";

const Connect = () => {
  const [click, setClick] = useState("1");
  const handleClick = (e) => {
    setClick(e.target.id);
  };
  return (
    <>
      <div className={classes.main}>
        <div className={classes.grid}>
          <div className={classes.heading}>
            {Tab.map((item, index) => (
              <button
                onClick={handleClick}
                disabled={click === `${item.id}`}
                id={item.id}
                key={index}
              >
                {item.wallet}
              </button>
            ))}
          </div>
          <div>
            {Tab.map((item, index) => (
              <div key={index}>
                {click === `${item.id}` && <p>{item.component}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
