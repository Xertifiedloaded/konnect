import { React, useContext } from "react";
import { UserContent } from "../../contextApi/contextApi";
import classes from "./cardContent.module.css";
const CardContent = ({
  items,
  handleName,
  image,
  name,
  toggleModal,
  loaderState,
}) => {
  return (
    <>
      <div
        className={classes.main}
        onClick={() => {
          toggleModal();
          console.log("hello i load");
          loaderState();
          handleName(items);
        }}
      >
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </>
  );
};

export default CardContent;
