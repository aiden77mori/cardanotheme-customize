import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../../components/useAddLibrary';

function HelpCenter() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);

    return(
        <main className="main">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">FAQ</li>
                        </ul>
                    </div>

                    <div className="col-12 col-xl-11">
                        <div className="main__title main__title--page">
                            <h1>Help center</h1>

                            <p>Many desktop publishing packages and <Link to="#">web page</Link> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="knowledge">
                            <h3 className="knowledge__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22,12A3,3,0,0,0,22,10a3,3,0,0,0-3-3H13.82A3,3,0,0,0,11,3H5A3,3,0,0,0,2,6a3,3,0,0,0,.78,2,3,3,0,0,0,0,4,3,3,0,0,0,0,4A3,3,0,0,0,2,18a3,3,0,0,0,3,3H19a3,3,0,0,0,2.22-5,3,3,0,0,0,0-4ZM11,19H5a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H5a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H5A1,1,0,0,1,5,9h6a1,1,0,0,1,0,2Zm0-4H5A1,1,0,0,1,5,5h6a1,1,0,0,1,0,2Zm8.69,11.71A.93.93,0,0,1,19,19H13.82a2.87,2.87,0,0,0,0-2H19a1,1,0,0,1,1,1A1,1,0,0,1,19.69,18.71Zm0-4A.93.93,0,0,1,19,15H13.82a2.87,2.87,0,0,0,0-2H19a1,1,0,0,1,1,1A1,1,0,0,1,19.69,14.71Zm0-4A.93.93,0,0,1,19,11H13.82a2.87,2.87,0,0,0,0-2H19a1,1,0,0,1,1,1A1,1,0,0,1,19.69,10.71Z"/></svg> Coins</h3>
                            <ul className="knowledge__list">
                                <li><Link to="#">Bitcoin</Link><span>31</span></li>
                                <li><Link to="#">Ethereum</Link><span>18</span></li>
                                <li><Link to="#">Litecoin</Link><span>23</span></li>
                                <li><Link to="#">Startcoin</Link><span>14</span></li>
                                <li><Link to="#">Infinitecoin</Link><span>17</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="knowledge">
                            <h3 className="knowledge__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,17.57a4.3,4.3,0,1,0-3.67,2.06A4.37,4.37,0,0,0,18.57,19l1.72,1.73a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM18,17a2.37,2.37,0,0,1-3.27,0,2.32,2.32,0,0,1,0-3.27,2.31,2.31,0,0,1,3.27,0A2.32,2.32,0,0,1,18,17ZM19,3H5A3,3,0,0,0,2,6v9a3,3,0,0,0,3,3H9a1,1,0,0,0,0-2H5a1,1,0,0,1-1-1V9H20v1a1,1,0,0,0,2,0V6A3,3,0,0,0,19,3Zm1,4H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1ZM10,11H7a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z"/></svg> Payments</h3>
                            <ul className="knowledge__list">
                                <li><Link to="#">Buy/Sell</Link><span>39</span></li>
                                <li><Link to="#">Withdrawals</Link><span>12</span></li>
                                <li><Link to="#">Coins Exchange</Link><span>8</span></li>
                                <li><Link to="#">About Tokens</Link><span>74</span></li>
                                <li><Link to="#">Earnings</Link><span>13</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="knowledge">
                            <h3 className="knowledge__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,9.84a2.92,2.92,0,0,0-3.43,4.65l2.72,2.72a1,1,0,0,0,1.42,0l2.72-2.72A2.92,2.92,0,0,0,12,9.84Zm2,3.23-2,2-2-2a.92.92,0,0,1,0-1.3.92.92,0,0,1,1.3,0,1,1,0,0,0,1.42,0,.92.92,0,0,1,1.3,1.3ZM19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z"/></svg> NFT Marketplace</h3>
                            <ul className="knowledge__list">
                                <li><Link to="#">Fundamentals</Link><span>44</span></li>
                                <li><Link to="#">Investment</Link><span>82</span></li>
                                <li><Link to="#">Risks and Benefits</Link><span>16</span></li>
                                <li><Link to="#">Trade</Link><span>8</span></li>
                                <li><Link to="#">Earnings</Link><span>13</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row row--grid">
                    <div className="col-12 col-lg-4">
                        <div className="faq">
                            <h3 className="faq__title">How to start as a seller?</h3>
                            <p className="faq__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            <p className="faq__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>

                        <div className="faq">
                            <h3 className="faq__title">When and how do you get paid?</h3>
                            <p className="faq__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites.</p>
                        </div>

                        <div className="faq">
                            <h3 className="faq__title">How much can you earn?</h3>
                            <p className="faq__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="faq">
                            <h3 className="faq__title">What is the service fee for sellers?</h3>
                            <p className="faq__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>

                        <div className="faq">
                            <h3 className="faq__title">What is the NFTs reward system?</h3>
                            <p className="faq__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>

                        <div className="faq">
                            <h3 className="faq__title">Which servers are available?</h3>
                            <p className="faq__text">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="faq">
                            <h3 className="faq__title">Why are you getting rejected shares?</h3>
                            <p className="faq__text">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.</p>
                        </div>

                        <div className="faq">
                            <h3 className="faq__title">What happens when there are no orders?</h3>
                            <p className="faq__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>

                        <div className="faq">
                            <h3 className="faq__title">Which miners are supported?</h3>
                            <p className="faq__text">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HelpCenter;