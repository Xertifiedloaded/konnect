import { React, useState, useEffect, useContext } from "react";
import classes from "./card.module.css";
import CardContent from "./cardContent/cardContent";
import { UserContent } from "../contextApi/contextApi";
import { Newwallet } from "../../constant/walletLayout/walletLayout";
import Modal from "../modal/modal";
const Card = () => {
  const {user,modal,setModal,loadingState,toggleModal,isLoading,setIsLoading} = useContext(UserContent);
  const [spin, setSpin] = useState(false);
  const [asset, setAsset] = useState(false);
  const handleClick = () => {
    setSpin(true)
    setTimeout(() => {
      setSpin(false)
    }, 2000)
  }
  const handleName = (items) => {
    setAsset(items.name);
  };
  // useEffect(() => {
  //   if (modal) {
  //     setModal(false)
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "visible"
  //   }
  // },[])
 

  return (
    <>
      <section className={classes.main}>
        <div className={classes.card}>
          {Newwallet.map((items, idx) => {
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
                      handleClick={handleClick}
                    />
                  </div>
                 
                </div>
              </>
            );
          })}
    
        </div>
        {modal && (
          <div className={classes.mainModal}>
            <Modal
              asset={asset}
              isLoading={isLoading}
              SetLoader={loadingState}
              spin={spin}
              closeModal={toggleModal}
              handleClick={handleClick}
            />
          </div>
        )}
       
      </section>
    </>
  );
};

export default Card;
