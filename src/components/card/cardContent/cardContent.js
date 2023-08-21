import { React, useContext } from "react";
import { UserContent } from "../../contextApi/contextApi";
import classes from "./cardContent.module.css";
const CardContent = ({
  items,
  handleName,
  image,
  name,
  toggleModal,
  handleClick 
}) => {
  return (
    <>
      <div
        className={classes.main}
        onClick={() => {
          toggleModal();
          console.log("hello i load");  
          handleClick()
          handleName(items);

        }}>
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </>
  );
};

export default CardContent;
