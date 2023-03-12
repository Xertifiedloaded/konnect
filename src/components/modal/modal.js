import { React, useState } from 'react'
import classes from './modal.module.css'
import close from '../../assets/images/icon-close-menu.svg'
import loader from '../../assets/images/rolling.gif'
const Modal = ({ closeModal, loading }) => {

    return (
        <>
            <div className={classes.main}>
                <div className={classes.modal__container} id="modal-container">
                    <div className={classes.modal__content}>
                        <div className={`${classes.modal__close} && ${classes.close_modal}`} title="Close">
                            <img onClick={closeModal} src={close} alt="" />
                        </div>
                        <div className={classes.modalInputContainer}>
                            {
                                loading ?
                                    <span>
                                        <h5>connecting</h5>
                                        <img src={loader} className={classes.loaderImg} />
                                    </span>
                                    :
                                    <h5>
                                        unable to connect try manually
                                    </h5>
                            }
                            <button>
                                connect manually
                            </button>
                        </div>

                        <div className={classes.walletName}>
                            <h5>TrustWallet</h5>
                            <h5>Connect to mathWallet and More</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal;