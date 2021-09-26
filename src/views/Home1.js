import React  from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../components/useAddLibrary';

function Home1() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);

    return (
        <main className="main">
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home__content">
                                <h1 className="home__title">The largest NFT marketplace</h1>
                                <p className="home__text">Digital marketplace for crypto collectibles and non-fungible tokens. <br />Buy, sell, and discover exclusive digital assets.</p>

                                <div className="home__btns">
                                    <Link to="/explore" className="home__btn home__btn--clr">Explore</Link>
                                    <Link to="/signin" className="home__btn">Create</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <section className="row row--grid">
        
                    <div className="col-12">
                        <div className="main__title">
                            <h2><Link to="/explore">Live auctions</Link></h2>
                        </div>
                    </div>
        

        
                    <div className="col-12">
                        <div className="main__carousel-wrap">
                            <div className="main__carousel main__carousel--live owl-carousel" id="live">
                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover1.jpg" alt="" />
                                        <span className="card__time">15 minutes left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt="" />
                                        <Link to="/author">@nickname</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>4.89 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover2.jpg" alt="" />
                                        <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                            <span className="card__clock card__clock--1"></span>
                                        </span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of Artificial Shadows</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar3.jpg" alt="" />
                                        <Link to="/author">@neo</Link>
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

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover3.jpg" alt="" />
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Flowers in Concrete (Modal)</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar15.jpg" alt="" />
                                        <Link to="/author">@min1max</Link>
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

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover4.jpg" alt="" />
                                        <span className="card__time card__time--clock">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                            <span className="card__clock card__clock--2"></span>
                                        </span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar11.jpg" alt="" />
                                        <Link to="/author">@midinh</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>1.11 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>23</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover5.jpg" alt="" />
                                        <span className="card__time">15 minutes left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar10.jpg" alt="" />
                                        <Link to="/author">@nicky87</Link>
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

                                <div className="card">
                                    <Link to="/item" className="card__cover card__cover--video">
                                        <img src="img/cover/cover6.jpg" alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/></svg>
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar8.jpg" alt="" />
                                        <Link to="/author">@redalert</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>1.63 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>90</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover7.jpg" alt="" />
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Tranquility (Modal)</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar.jpg" alt="" />
                                        <Link to="/author">@aaarthur</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>2.55 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>64</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button className="main__nav main__nav--prev" data-nav="#live" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg></button>
                            <button className="main__nav main__nav--next" data-nav="#live" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></button>
                        </div>
                    </div>
        
                </section>



                <section className="row row--grid">
        
                    <div className="col-12">
                        <div className="main__title">
                            <h2>Top sellers</h2>

                            <Link to="/authors" className="main__link">View all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></Link>
                        </div>
                    </div>
        

        
                    <div className="col-12">
                        <ul className="sellers-list">
                            <li>
                                <span className="sellers-list__number">1</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar.jpg" alt="" />
                                    <Link to="/author">@miriuuu</Link>
                                    <span>214.22 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">2</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar2.jpg" alt="" />
                                    <Link to="/author">@sc00ty</Link>
                                    <span>205.8 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">3</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar3.jpg" alt="" />
                                    <Link to="/author">@redalert</Link>
                                    <span>137.65 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">4</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar4.jpg" alt="" />
                                    <Link to="/author">@1one</Link>
                                    <span>129.301 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">5</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                    <Link to="/author">@kateblank</Link>
                                    <span>112.3 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">6</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar6.jpg" alt="" />
                                    <Link to="/author">@johndoe</Link>
                                    <span>108.88 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">7</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar7.jpg" alt="" />
                                    <Link to="/author">@nickname</Link>
                                    <span>88.58 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">8</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar8.jpg" alt="" />
                                    <Link to="/author">@lllily</Link>
                                    <span>73.207 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">9</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar9.jpg" alt="" />
                                    <Link to="/author">@fantraingle</Link>
                                    <span>71.076 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">10</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar10.jpg" alt="" />
                                    <Link to="/author">@oxyoxyoxy</Link>
                                    <span>57.041 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">11</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar11.jpg" alt="" />
                                    <Link to="/author">@vandam</Link>
                                    <span>50.261 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">12</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar12.jpg" alt="" />
                                    <Link to="/author">@dididi</Link>
                                    <span>44.79 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">13</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar13.jpg" alt="" />
                                    <Link to="/author">@lyzzy</Link>
                                    <span>43.24 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">14</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar14.jpg" alt="" />
                                    <Link to="/author">@oceanu</Link>
                                    <span>41.221 ETH</span>
                                </div>
                            </li>

                            <li>
                                <span className="sellers-list__number">15</span>
                                <div className="sellers-list__author sellers-list__author--verified">
                                    <img src="img/avatars/avatar15.jpg" alt="" />
                                    <Link to="/author">@justart</Link>
                                    <span>40.195 ETH</span>
                                </div>
                            </li>
                        </ul>
                    </div>
        
                </section>



                <section className="row row--grid">
        
                    <div className="col-12">
                        <div className="main__title">
                            <h2><Link to="/explore">Explore</Link></h2>
                        </div>
                    </div>
        

        
                    <div className="col-12">
                        <div className="main__carousel-wrap">
                            <div className="main__carousel main__carousel--explore owl-carousel" id="explore">
                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover1.jpg" alt="" />
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author">
                                        <img src="img/avatars/avatar13.jpg" alt="" />
                                        <Link to="/author">@nickname</Link>
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

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover2.jpg" alt="" />
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of Artificial Shadows</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar10.jpg" alt="" />
                                        <Link to="/author">@neo</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>2.61 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>702</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover3.jpg" alt="" />
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Flowers in Concrete (Modal)</Link></h3>
                                    <div className="card__author">
                                        <img src="img/avatars/avatar.jpg" alt="" />
                                        <Link to="/author">@min1max</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>3.19 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes card__likes--active" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>37</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover4.jpg" alt="" />
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar8.jpg" alt="" />
                                        <Link to="/author">@midinh</Link>
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

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover5.jpg" alt="" />
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar9.jpg" alt="" />
                                        <Link to="/author">@nicky87</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>0.99 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>358</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover card__cover--video">
                                        <img src="img/cover/cover6.jpg" alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"/></svg>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author">
                                        <img src="img/avatars/avatar14.jpg" alt="" />
                                        <Link to="/author">@redalert</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>1.63 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>90</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover7.jpg" alt="" />
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Tranquility (Modal)</Link></h3>
                                    <div className="card__author">
                                        <img src="img/avatars/avatar4.jpg" alt="" />
                                        <Link to="/author">@aaarthur</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>2.55 ETH</span>
                                        </div>
                                        
                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>64</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button className="main__nav main__nav--prev" data-nav="#explore" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg></button>
                            <button className="main__nav main__nav--next" data-nav="#explore" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></button>
                        </div>
                    </div>
        
                </section>



                <section className="row row--grid">
        
                    <div className="col-12">
                        <div className="main__title">
                            <h2>Hot collections</h2>
                        </div>
                    </div>
        

        
                    <div className="col-12">
                        <div className="main__carousel-wrap">
                            <div className="main__carousel main__carousel--collections owl-carousel" id="collections">
                                <div className="collection">
                                    <Link to="/collection" className="collection__cover" data-bg="img/bg/bg-small.png"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar collection__avatar--verified">
                                            <img src="img/avatars/avatar3.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">Hashmasks</Link></h3>
                                        <span className="collection__number">ERC-721</span>
                                    </div>
                                </div>

                                <div className="collection">
                                    <Link to="/collection" className="collection__cover" data-bg="img/bg/bg-small2.png"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar collection__avatar--verified">
                                            <img src="img/avatars/avatar9.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">NFTheft</Link></h3>
                                        <span className="collection__number">ERC-721</span>
                                    </div>
                                </div>

                                <div className="collection">
                                    <Link to="/collection" className="collection__cover" data-bg="img/bg/bg-small3.png"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar collection__avatar--verified">
                                            <img src="img/avatars/avatar12.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">Inventory</Link></h3>
                                        <span className="collection__number">ERC-1155</span>
                                    </div>
                                </div>

                                <div className="collection">
                                    <Link to="/collection" className="collection__cover" data-bg="img/bg/bg-small4.png"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar">
                                            <img src="img/avatars/avatar15.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">ProphecyNFT</Link></h3>
                                        <span className="collection__number">ERC-721</span>
                                    </div>
                                </div>

                                <div className="collection">
                                    <Link to="/collection" className="collection__cover" data-bg="img/bg/bg-small5.png"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar collection__avatar--verified">
                                            <img src="img/avatars/avatar4.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">Hashavatars</Link></h3>
                                        <span className="collection__number">ERC-1155</span>
                                    </div>
                                </div>

                                <div className="collection">
                                    <Link to="/collection" className="collection__cover" data-bg="img/bg/bg-small6.png"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar">
                                            <img src="img/avatars/avatar11.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">Clap Token</Link></h3>
                                        <span className="collection__number">ERC-1155</span>
                                    </div>
                                </div>

                                <div className="collection">
                                    <Link to="/collection" className="collection__cover"></Link>
                                    <div className="collection__meta">
                                        <Link to="/author" className="collection__avatar collection__avatar--verified">
                                            <img src="img/avatars/avatar15.jpg" alt="" />
                                        </Link>
                                        <h3 className="collection__name"><Link to="/collection">InventoryNFT</Link></h3>
                                        <span className="collection__number">ERC-721</span>
                                    </div>
                                </div>
                            </div>

                            <button className="main__nav main__nav--prev" data-nav="#collections" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg></button>
                            <button className="main__nav main__nav--next" data-nav="#collections" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></button>
                        </div>
                    </div>
        
                </section>



                <div className="row row--grid">
        
                    <div className="col-12">
                        <div className="main__title main__title--border-top">
                            <h2>Get started creating && selling your NFTs</h2>
                        </div>
                    </div>
        

                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="feature">
                            <span className="feature__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"/></svg>
                            </span>
                            <h3 className="feature__title">Set up your wallet</h3>
                            <p className="feature__text">Once you’ve set up your wallet of choice, connect it to NFT marketplace by clicking this link. <br /><Link to="/signin">Connect my wallet</Link>.</p>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="feature">
                            <span className="feature__icon feature__icon--green">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z"/></svg>
                            </span>
                            <h3 className="feature__title">Create your collection</h3>
                            <p className="feature__text">Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="feature">
                            <span className="feature__icon feature__icon--purple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.71,6.29a1,1,0,0,0-1.42,0L20,7.59V2a1,1,0,0,0-2,0V7.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,22.71,6.29ZM19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21Z"/></svg>
                            </span>
                            <h3 className="feature__title">Add your NFTs</h3>
                            <p className="feature__text">Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="feature feature--last">
                            <span className="feature__icon feature__icon--red">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
                            </span>
                            <h3 className="feature__title">List them for sale</h3>
                            <p className="feature__text">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home1;