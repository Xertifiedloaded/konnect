import { React, useContext, useState } from "react";
import classes from "./modal.module.css";
import close from "../../assets/images/icon-close-menu.svg";
import loader from "../../assets/images/Dual Ring.gif";
import { UserContent } from "../contextApi/contextApi";
import { Link } from "react-router-dom";
const Modal = ({ asset, spin }) => {
  const { toggleModal } = useContext(UserContent);
  return (
    <>
      <div className={classes.main}>
        <div className={classes.modal__container} id="modal-container">
          <div className={classes.modal__content}>
            <div
              className={`${classes.modal__close} && ${classes.close_modal}`}
              title="Close"
            >
              <img onClick={toggleModal} src={close} alt="" />
            </div>
            <div className={classes.modalInputContainer}>
              {spin ? (
                <div className={classes.auto}>
                  <span>
                    <h5>Connecting</h5>
                    <img src={loader} className={classes.loaderImg} />
                  </span>
                  <a href="/connect">
                    <button>Connect Automatically</button>
                  </a>
                </div>
              ) : (
                <div className={classes.auto}>
                  <h5>Unable to connect try manual connection</h5>
                  <Link to="/connect">
                    <button>connect manually</button>
                  </Link>
                </div>
              )}
            </div>
            <div className={classes.walletName}>
              <h5>{asset}</h5>
              <h5>Connect to {asset} and More</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
