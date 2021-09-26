import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../components/useAddLibrary';

function Activity() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);
    
    return (
        <main className="main">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Activity</li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1>Activity</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3 order-xl-2">
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

                    <div className="col-12 col-xl-9 order-xl-1">
                        <div className="row row--grid">
                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                        <div className="row row--grid collapse" id="collapsemore">
                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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

                            <div className="col-12 col-lg-6">
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
                                <button className="main__load" type="button" data-toggle="collapse" data-target="#collapsemore" aria-expanded="false" aria-controls="collapsemore">Load more</button>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </main>
    )
}

export default Activity;