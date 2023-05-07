import { React, useState, useEffect, useContext } from "react";
import classes from "./card.module.css";
import CardContent from "./cardContent/cardContent";
import { UserContent } from "../contextApi/contextApi";

import Modal from "../modal/modal";
const Card = () => {
  const {
    user,
    modal,
    loadingState,
    toggleModal,
    isLoading,
    setIsLoading,
  } = useContext(UserContent);
  const [spin, setSpin] = useState(false);
  const [asset, setAsset] = useState(false);
  const loaderState = () => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 3000);
  };
  const handleName = (items) => {
    setAsset(items.name);
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.card}>
          {user.map((items, idx) => {
            return (
              <>
                <div className={classes.Divider}>
                  <div className={classes.name}>
                    <CardContent
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      handleName={handleName}
                      user={user}
                      setSpin={setSpin}
                      spin={spin}
                      modal={modal}
                      toggleModal={toggleModal}
                      items={items}
                      {...items}
                      key={idx}
                      loaderState={loaderState}
                    />
                  </div>
                  <div className={classes.modal}>
                    {modal && (
                      <Modal
                        asset={asset}
                        isLoading={isLoading}
                        items={items}
                        SetLoader={loadingState}
                        spin={spin}
                        closeModal={toggleModal}
                      />
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
