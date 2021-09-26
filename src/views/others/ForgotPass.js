import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../../components/useAddLibrary';

function ForgotPass() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);

    return(
        <main className="main">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Restore password</li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <div className="sign">
                            <div className="sign__content">
                                <form action="#" className="sign__form">
                                    <a href="index.html" className="sign__logo">
                                        <img src="img/logo.svg" alt="" />
                                    </a>

                                    <div className="sign__group">
                                        <input type="text" className="sign__input" placeholder="Email" />
                                    </div>

                                    <div className="sign__group sign__group--checkbox">
                                        <input id="remember" name="remember" type="checkbox" defaultChecked="checked" />
                                        <label htmlFor="remember">I agree to the <Link to="privacypolicy">Privacy Policy</Link></label>
                                    </div>
                                    
                                    <button className="sign__btn" type="button">Send</button>

                                    <span className="sign__text">We will send a password to your Email</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ForgotPass;