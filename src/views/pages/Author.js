import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../../components/useAddLibrary';

function Author() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);

    return(
        <main className="main">
            <div className="main__author" data-bg="img/bg/bg.png"></div>
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12 col-xl-3">
                        <div className="author author--page">
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                </Link>
                                <h1 className="author__name"><Link to="/author">Lily Rose</Link></h1>
                                <h2 className="author__nickname"><Link to="/author">@l1rose</Link></h2>
                                <p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <div className="author__code">
                                    <input type="text" defaultValue="XAVUW3sw3ZunitokcLtemEfX3tGuX2plateWdh" id="author-code" />
                                    <button type="button">
                                        <span>Copied</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,19H6a3,3,0,0,1-3-3V8A1,1,0,0,0,1,8v8a5,5,0,0,0,5,5H18a1,1,0,0,0,0-2Zm5-9.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L16.06,3H8A3,3,0,0,0,5,6v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V10S23,10,23,9.94ZM17,6.41,19.59,9H18a1,1,0,0,1-1-1ZM21,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h7V8a3,3,0,0,0,3,3h3Z"/></svg>
                                    </button>
                                </div>
                                <Link to="#" className="author__link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z"/></svg> https://unitok.template</Link>
                                <div className="author__social">
                                    <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.07,6.35H15V7.76h5.09ZM19,16.05a2.23,2.23,0,0,1-1.3.37A2.23,2.23,0,0,1,16,15.88a2.49,2.49,0,0,1-.62-1.76H22a6.47,6.47,0,0,0-.17-2,5.08,5.08,0,0,0-.8-1.73,4.17,4.17,0,0,0-1.42-1.21,4.37,4.37,0,0,0-2-.45,4.88,4.88,0,0,0-1.9.37,4.51,4.51,0,0,0-1.47,1,4.4,4.4,0,0,0-.95,1.52,5.4,5.4,0,0,0-.33,1.91,5.52,5.52,0,0,0,.32,1.94A4.46,4.46,0,0,0,14.16,17a4,4,0,0,0,1.46,1,5.2,5.2,0,0,0,1.94.34,4.77,4.77,0,0,0,2.64-.7,4.21,4.21,0,0,0,1.63-2.35H19.62A1.54,1.54,0,0,1,19,16.05Zm-3.43-4.12a1.87,1.87,0,0,1,1-1.14,2.28,2.28,0,0,1,1-.2,1.73,1.73,0,0,1,1.36.49,2.91,2.91,0,0,1,.63,1.45H15.41A3,3,0,0,1,15.52,11.93Zm-5.29-.48a3.06,3.06,0,0,0,1.28-1,2.72,2.72,0,0,0,.43-1.58,3.28,3.28,0,0,0-.29-1.48,2.4,2.4,0,0,0-.82-1,3.24,3.24,0,0,0-1.27-.52,7.54,7.54,0,0,0-1.64-.16H2V18.29H8.1a6.55,6.55,0,0,0,1.65-.21,4.55,4.55,0,0,0,1.43-.65,3.13,3.13,0,0,0,1-1.14,3.41,3.41,0,0,0,.37-1.65,3.47,3.47,0,0,0-.57-2A3,3,0,0,0,10.23,11.45ZM4.77,7.86H7.36a4.17,4.17,0,0,1,.71.06,1.64,1.64,0,0,1,.61.22,1.05,1.05,0,0,1,.42.44,1.42,1.42,0,0,1,.16.72,1.36,1.36,0,0,1-.47,1.15,2,2,0,0,1-1.22.35H4.77ZM9.61,15.3a1.28,1.28,0,0,1-.45.5,2,2,0,0,1-.65.26,3.33,3.33,0,0,1-.78.08h-3V12.69h3a2.4,2.4,0,0,1,1.45.41,1.65,1.65,0,0,1,.54,1.39A1.77,1.77,0,0,1,9.61,15.3Z"/></svg></Link>

                                    <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg></Link>

                                    <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg></Link>

                                    <Link to="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.20905,6.41669H22V4.08331H14.51978l-2.48584,9.16663h-.068L9.50269,4.08331H2V6.41663h.76837A.89578.89578,0,0,1,3.5,7.11139v9.83032a.84093.84093,0,0,1-.73163.6416H2v2.33338H8V17.58331H6.5V7.25h.08752L10.0451,19.91669h2.712L16.25989,7.25h.07355V17.58331H14.83337v2.33338H22V17.58331h-.79095a.83931.83931,0,0,1-.70905-.6416V7.11145A.8976.8976,0,0,1,21.20905,6.41669Z"/></svg></Link>
                                </div>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>3829</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-9">
                        <div className="profile">
                            <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">On Sale</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Created</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">My Activity</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">Settings</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                                <div className="row row--grid">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover1.jpg" alt="" />
                                                <span className="card__time card__time--clock">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                                    <span className="card__clock card__clock--2"></span>
                                                </span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Reserve price</span>
                                                    <span>4.89 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>189</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <div className="card__cover card__cover--carousel owl-carousel">
                                                <img src="img/cover/slide1.jpg" alt="" />
                                                <img src="img/cover/slide2.jpg" alt="" />
                                                <img src="img/cover/slide3.jpg" alt="" />
                                            </div>

                                            <h3 className="card__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Reserve price</span>
                                                    <span>5.04 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover2.jpg" alt="" />
                                                <span className="card__time">15 minutes left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of Artificial Shadows</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>2.61 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>702</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover3.jpg" alt="" />
                                                <span className="card__time">an hour left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>3.19 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes card__likes--active" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>37</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover4.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Reserve price</span>
                                                    <span>1.11 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>23</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover5.jpg" alt="" />
                                                <span className="card__time">an hour left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>0.99 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>358</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--grid collapse" id="collapsemore">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover1.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Reserve price</span>
                                                    <span>4.89 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>189</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover8.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Reserve price</span>
                                                    <span>5.04 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover2.jpg" alt="" />
                                                <span className="card__time">15 minutes left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of Artificial Shadows</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>2.61 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>702</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover3.jpg" alt="" />
                                                <span className="card__time">an hour left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>3.19 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes card__likes--active" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>37</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover4.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Reserve price</span>
                                                    <span>1.11 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>23</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover5.jpg" alt="" />
                                                <span className="card__time">an hour left</span>
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Current price</span>
                                                    <span>0.99 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>358</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--grid">
                                    <div className="col-12">
                                        <button className="main__load" type="button" data-toggle="collapse" data-target="#collapsemore" aria-expanded="false" aria-controls="collapsemore">Load more</button>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                <div className="row row--grid">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover8.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Was sold for</span>
                                                    <span>4.89 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>189</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover7.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of Artificial Shadows</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Was sold for</span>
                                                    <span>2.61 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>702</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover6.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Was sold for</span>
                                                    <span>3.19 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes card__likes--active" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>37</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover5.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Was sold for</span>
                                                    <span>1.11 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>23</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover4.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Was sold for</span>
                                                    <span>0.99 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                                    <span>358</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card">
                                            <Link to="/item" className="card__cover">
                                                <img src="img/cover/cover3.jpg" alt="" />
                                            </Link>
                                            <h3 className="card__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                            <div className="card__author card__author--verified">
                                                <img src="img/avatars/avatar5.jpg" alt="" />
                                                <Link to="/author">@l1rose</Link>
                                            </div>
                                            <div className="card__info">
                                                <div className="card__price">
                                                    <span>Was sold for</span>
                                                    <span>3.33 ETH</span>
                                                </div>
                                                
                                                <button className="card__likes" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--grid">
                                    <div className="col-12">
                                        <div className="paginator">
                                            <span className="paginator__pages">8 from 169</span>

                                            <ul className="paginator__list">
                                                <li>
                                                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg></button>
                                                </li>
                                                <li className="active"><button>1</button></li>
                                                <li><button>2</button></li>
                                                <li><button>3</button></li>
                                                <li><button>4</button></li>
                                                <li>
                                                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                <div className="row">
                                    <div className="col-12 col-xl-4 order-xl-2">
                                        <div className="filter-wrap">
                                            <button className="filter-wrap__btn" type="button" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open filter</button>

                                            <div className="collapse filter-wrap__content" id="collapseFilter">
                                                <div className="filter filter--sticky">
                                                    <h4 className="filter__title">Filters <button type="button">Clear all</button></h4>

                                                    <div className="filter__group">
                                                        <ul className="filter__checkboxes">
                                                            <li>
                                                                <input id="type5" type="checkbox" name="type5" defaultChecked />
                                                                <label htmlFor="type5">Listings</label>
                                                            </li>
                                                            <li>
                                                                <input id="type6" type="checkbox" name="type6" />
                                                                <label htmlFor="type6">Purchases</label>
                                                            </li>
                                                            <li>
                                                                <input id="type7" type="checkbox" name="type7" defaultChecked />
                                                                <label htmlFor="type7">Sales</label>
                                                            </li>
                                                            <li>
                                                                <input id="type8" type="checkbox" name="type8" defaultChecked />
                                                                <label htmlFor="type8">Transfers</label>
                                                            </li>
                                                            <li>
                                                                <input id="type9" type="checkbox" name="type9" />
                                                                <label htmlFor="type9">Bids</label>
                                                            </li>
                                                            <li>
                                                                <input id="type10" type="checkbox" name="type10" />
                                                                <label htmlFor="type10">Likes</label>
                                                            </li>
                                                            <li>
                                                                <input id="type11" type="checkbox" name="type11" />
                                                                <label htmlFor="type11">Followings</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-xl-8 order-xl-1">
                                        <div className="row row--grid">
                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover1.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Walking on Air</Link></h3>
                                                        <p className="activity__text">listed by <Link to="/author">@Nickname</Link> <br />for <b>0.049 ETH</b></p>
                                                        <span className="activity__time">4 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover2.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                                        <p className="activity__text">9 editions listed by <Link to="/author">@neo</Link> <br />for <b>0.085 ETH</b> each</p>
                                                        <span className="activity__time">21 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover3.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                                        <p className="activity__text">purchased by <Link to="/author">@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from <Link to="/author">@min1max</Link></p>
                                                        <span className="activity__time">21 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover4.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Industrial Revolution</Link></h3>
                                                        <p className="activity__text">transferred from <Link to="/author">@midinh</Link> <br />to <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">23 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover5.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Tranquility</Link></h3>
                                                        <p className="activity__text"><Link to="/author">@aaarthur</Link> offered <b>0.002 WETH</b></p>
                                                        <span className="activity__time">41 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover6.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Tetradecapus</Link></h3>
                                                        <p className="activity__text">liked by <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">45 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover7.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Elegance</Link></h3>
                                                        <p className="activity__text">started following <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">48 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover8.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Walking on Air</Link></h3>
                                                        <p className="activity__text">started following <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">49 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row row--grid collapse" id="collapsemore1">
                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover1.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Walking on Air</Link></h3>
                                                        <p className="activity__text">listed by <Link to="/author">@Nickname</Link> <br />for <b>0.049 ETH</b></p>
                                                        <span className="activity__time">4 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover2.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                                        <p className="activity__text">9 editions listed by <Link to="/author">@neo</Link> <br />for <b>0.085 ETH</b> each</p>
                                                        <span className="activity__time">21 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover3.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                                        <p className="activity__text">purchased by <Link to="/author">@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from <Link to="/author">@min1max</Link></p>
                                                        <span className="activity__time">21 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover4.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Industrial Revolution</Link></h3>
                                                        <p className="activity__text">transferred from <Link to="/author">@midinh</Link> <br />to <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">23 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover5.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Tranquility</Link></h3>
                                                        <p className="activity__text"><Link to="/author">@aaarthur</Link> offered <b>0.002 WETH</b></p>
                                                        <span className="activity__time">41 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover6.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Tetradecapus</Link></h3>
                                                        <p className="activity__text">liked by <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">45 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover7.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Elegance</Link></h3>
                                                        <p className="activity__text">started following <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">48 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6 col-xl-12">
                                                <div className="activity">
                                                    <Link to="/item" className="activity__cover">
                                                        <img src="img/cover/cover8.jpg" alt="" />
                                                    </Link>
                                                    <div className="activity__content">
                                                        <h3 className="activity__title"><Link to="/item">Walking on Air</Link></h3>
                                                        <p className="activity__text">started following <Link to="/author">@johndoe</Link></p>
                                                        <span className="activity__time">49 minutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row row--grid">
                                            <div className="col-12">
                                                <button className="main__load" type="button" data-toggle="collapse" data-target="#collapsemore1" aria-expanded="false" aria-controls="collapsemore1">Load more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab-4" role="tabpanel">
                                <div className="row row--grid">
                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--profile">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Profile details</h4>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="username">Login</label>
                                                        <input id="username" type="text" name="username" className="sign__input" placeholder="User123" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="email">Email</label>
                                                        <input id="email" type="text" name="email" className="sign__input" placeholder="email@email.com" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="firstname">First name</label>
                                                        <input id="firstname" type="text" name="firstname" className="sign__input" placeholder="John" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="lastname">Last name</label>
                                                        <input id="lastname" type="text" name="lastname" className="sign__input" placeholder="Doe" />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="sign__btn" type="button">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--profile">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Change password</h4>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="oldpass">Old password</label>
                                                        <input id="oldpass" type="password" name="oldpass" className="sign__input" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="newpass">New password</label>
                                                        <input id="newpass" type="password" name="newpass" className="sign__input" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="confirmpass">Confirm new password</label>
                                                        <input id="confirmpass" type="password" name="confirmpass" className="sign__input" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="select">Select</label>
                                                        <select name="select" id="select" className="sign__select">
                                                            <option defaultValue="0">Option</option>
                                                            <option defaultValue="1">Option 2</option>
                                                            <option defaultValue="2">Option 3</option>
                                                            <option defaultValue="3">Option 4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="sign__btn" type="button">Change</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </main>    
    )
}

export default Author;