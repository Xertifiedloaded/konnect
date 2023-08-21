import { React, useContext, useState } from "react";
import classes from "./modal.module.css";
import close from "../../assets/images/icon-close-menu.svg";
import Gear from "../../assets/images/Gear-0.3s-200px.gif";
import loader from "../../assets/images/ring.gif";
import { UserContent } from "../contextApi/contextApi";
import { Link } from "react-router-dom";
const Modal = ({ asset, spin, card, items }) => {
  const { toggleModal } = useContext(UserContent);
  return (
    <>

      <main>
        <div className={classes.ImgModal}>
          <img src={close} alt="" onClick={() => toggleModal()} />
        </div>
        <div className={classes.box}>
          {
            spin ? <div className={classes.spin}>
              <div className={classes.loaderSpan}>
                <h5>Connecting</h5>
                <span className={classes.loaderImg}>
                  <img src={Gear} />
                </span>
              </div>
              <div className={classes.mainBtn}>
                <img src={loader} />
              </div>
            </div>
              :
              <div className={classes.manual}>
                <h5>Unable to Establish the connection</h5>
                <div className={classes.autoBtn}>
                  <Link to={'/connect'}>
                    <button>Connect Manually</button>
                  </Link>
                </div>
              </div>
          }
          <div className={classes.walletName}>
            <h5>{asset}</h5>
            <h5>Connect to {asset} and More</h5>
          </div>

        </div>
      </main>
    </>
  );
};

export default Modal;



