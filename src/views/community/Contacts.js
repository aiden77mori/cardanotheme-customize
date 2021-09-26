import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../../components/useAddLibrary';

function Contacts() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);
    
    return(
        <main className="main">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Contacts</li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1>Contacts</h1>
                        </div>
                    </div>
                </div>

                <div className="row row--grid">
                    <div className="col-12 col-lg-7 col-xl-8">
                        <form action="#" className="sign__form sign__form--contacts">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="sign__group">
                                        <input type="text" name="name" className="sign__input" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="sign__group">
                                        <input type="text" name="email" className="sign__input" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="sign__group">
                                        <input type="text" name="subject" className="sign__input" placeholder="Subject" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="sign__group">
                                        <textarea name="text" className="sign__textarea" placeholder="Type your message"></textarea>
                                    </div>
                                </div>

                                <div className="col-12 col-xl-3">
                                    <button type="button" className="sign__btn">Send</button>
                                </div>
                            </div>
                        </form>	
                    </div>

                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <div className="main__title main__title--sidebar">
                            <h2>Info</h2>
                            <p>It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                        <ul className="contacts__list">
                            <li><Link to="tel:88002345678">8 800 234-56-78</Link></li>
                            <li><Link to="mailto:support@Unitok.com">support@Unitok.com</Link></li>
                            <li><Link to="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" className="open-map">221B Baker St, Marylebone, London</Link></li>
                        </ul>
                        <div className="contacts__social">
                            <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"/></svg></Link>

                            <Link to="#" target="_blank"><svg viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clirule="evenodd" d="M11.5507 0.0036464H11.5624L11.5612 0L11.5507 0.0036464ZM11.5108 0.0176323L11.5507 0.0036464H11.5252L11.5108 0.0176323ZM11.5039 0.0243315L11.5108 0.0176323L11.4917 0.0243072L11.5039 0.0243315ZM11.5039 0.0243315L11.2748 0.246719C13.8446 0.975936 15.088 2.11473 15.088 2.11473C13.4318 1.30287 11.9393 0.896938 10.4467 0.732864C9.36818 0.56879 8.28967 0.65508 7.37851 0.732864H7.13058C6.54793 0.732864 5.30826 0.975936 3.64711 1.62616C3.06818 1.87287 2.73595 2.03452 2.73595 2.03452C2.73595 2.03452 3.9781 0.816724 6.71529 0.166505L6.54793 0.00243113C6.54793 0.00243113 4.47521 -0.075352 2.2376 1.54594C2.2376 1.54594 0 5.36704 0 10.0778C0 10.0778 1.23967 12.1925 4.64008 12.2727C4.64008 12.2727 5.13595 11.6249 5.63802 11.0549C3.72893 10.4861 2.98512 9.34857 2.98512 9.34857C2.98512 9.34857 3.15124 9.42878 3.40041 9.59164H3.47479C3.50979 9.59164 3.52722 9.60778 3.54568 9.62487C3.54684 9.62595 3.548 9.62702 3.54917 9.6281V9.63539C3.56901 9.65484 3.58636 9.67185 3.62355 9.67185C3.6596 9.68642 3.69564 9.70096 3.73164 9.71548C4.10416 9.8658 4.47123 10.0139 4.77645 10.158C5.35413 10.4035 6.09669 10.6478 7.00785 10.8094C8.16074 10.9735 9.48223 11.0525 10.9872 10.8094L11.0353 10.7988L11.0353 10.7988C11.7631 10.6384 12.4908 10.4779 13.2186 10.1592C13.3516 10.0923 13.4931 10.0255 13.6419 9.95511C14.0339 9.76978 14.4769 9.56038 14.9504 9.26349C14.9504 9.26349 14.2066 10.4011 12.2169 10.9699C12.626 11.5362 13.2025 12.1852 13.2025 12.1852C15.9898 12.1255 17.3804 10.6948 17.8328 10.2295C17.9325 10.1269 17.9866 10.0713 18 10.0875C18 5.38405 15.75 1.55566 15.75 1.55566C13.7464 0.097178 11.8701 0.0257804 11.5039 0.0243315ZM6.13886 5.36701C7.00663 5.36701 7.70828 6.09623 7.70828 6.98952C7.70828 7.88889 7.00167 8.61811 6.1339 8.61811C5.26613 8.61811 4.55952 7.88889 4.55952 6.99682C4.55952 6.09745 5.26613 5.37066 6.1339 5.37066L6.13886 5.36701ZM11.7707 5.36701C12.6422 5.36701 13.3451 6.09623 13.3451 6.98952C13.3451 7.88889 12.6384 8.61811 11.7707 8.61811C10.9029 8.61811 10.1963 7.88889 10.1963 6.99682C10.1988 6.09745 10.9066 5.37066 11.7707 5.37066V5.36701Z"></path></svg></Link>

                            <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg></Link>

                            <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg></Link>
                            
                            <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z"/></svg></Link>

                            <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"/></svg></Link>

                            <Link to="#" href="mailto:support@Unitok.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/></svg></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="partners owl-carousel">
                            <button className="partners__img">
                                <img src="img/partners/3docean-light-background.png" alt="" />
                            </button>

                            <button className="partners__img">
                                <img src="img/partners/activeden-light-background.png" alt="" />
                            </button>

                            <button className="partners__img">
                                <img src="img/partners/audiojungle-light-background.png" alt="" />
                            </button>

                            <button className="partners__img">
                                <img src="img/partners/codecanyon-light-background.png" alt="" />
                            </button>

                            <button className="partners__img">
                                <img src="img/partners/photodune-light-background.png" alt="" />
                            </button>

                            <button className="partners__img">
                                <img src="img/partners/themeforest-light-background.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contacts;