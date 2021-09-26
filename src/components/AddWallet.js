import React from 'react';
import useAddLibrary from './useAddLibrary';

function AddWallet(props) {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);
    
    return (
        <div id={props.modalId} className="zoom-anim-dialog mfp-hide modal-w modal--form">
            <button className="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
            <h2 className="modal__title_24">Add Wallet</h2>
                <div className="row">
                    <div className="col-12 col-xl-4">
                        <div className="asset__item_qrcode">
                            <div className="qrcode-img"></div>
                        </div>
                        <button className="sign__btn" type="button">CONNECT NAMI</button>
                    </div>

                    <div className="col-12 col-xl-8">
                        <div className="card card-asset-detail">
                            <div className="card-body">
                                <ul className="detail-block">
                                    <li>
                                        <h5>Address</h5>
                                        <p id="addressCopy">3. Once complete, you will receive ADA back into your wallet minus the Cardano network fees.</p>
                                        <button className="copyBtn"></button>
                                    </li>
                                    <li className="important">
                                        <h5>Payment amount</h5>
                                        <p><span id="paymentCopy">2.14273</span> ADA</p>
                                        <button className="copyBtn"></button>
                                    </li>
                                    <li>
                                        <h5>Transaction Instructions</h5>
                                        <p>1. Send the EXACT displayed ADA amount to the wallet address provided.</p>
                                        <p>Hint: use the copy button!</p>
                                        <p>2. Please ensure your payment is complete before the timer ends.</p>
                                        <p>3. Once complete, you will receive ADA back into your wallet minus the Cardano network fees.</p>
                                        <p><strong>DO NOT SEND FROM AN EXCHANGE.</strong> Only send ADA from a supported wallet i.e. Daedalus, Yoroi, or Adalite.</p>
                                        <p>Alternatively, you can connect with Nami using the button provided!</p>
                                    </li>
                                    <li>
                                        <h5>Session Timer</h5>
                                        <span id="addWalletTimer" className="card__clock card__clock--2"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AddWallet;