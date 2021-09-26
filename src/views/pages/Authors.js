import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../../components/useAddLibrary';

function Authors() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);

    return(
        <main className="main">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Authors</li>
                        </ul>
                    </div>

                    <div className="col-12">
                        <div className="main__title main__title--page">
                            <h1>Authors</h1>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="main__filter">
                            <form action="#" className="main__filter-search">
                                <input type="text" placeholder="Search for a creator…" />
                                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
                            </form>

                            <div className="main__filter-wrap">
                                <select className="main__select" name="status">
                                    <option value="rating">By rating</option>
                                    <option value="views">By views</option>
                                    <option value="popularity">By popularity</option>
                                </select>

                                <select className="main__select" name="authors">
                                    <option value="0">All Authors</option>
                                    <option value="1">Verified only</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row--grid">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover author__cover--bg" data-bg="img/bg/bg-small.png">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Adam Zapel</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@aaarthur</Link></h3>
                                <p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
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

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar2.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Barb E. Dahl</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@nicky87</Link></h3>
                                <p className="author__text">If you are going to use a passage of Lorem Ipsum</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>4602</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover author__cover--bg" data-bg="img/bg/bg-small2.png">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar3.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Biff Wellington</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@neo</Link></h3>
                                <p className="author__text">Many desktop publishing packages and web page editors now use Lorem</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>1294</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow author__follow--true" type="button">Unfollow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover author__cover--bg" data-bg="img/bg/bg-small3.png">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar4.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Charity Case</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@midinh</Link></h3>
                                <p className="author__text">There are many variations of passages of Lorem Ipsum</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>10 845</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover"></Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Don Key</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@kateblank</Link></h3>
                                <p className="author__text">The generated Lorem Ipsum is therefore always free from repetition</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>9713</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover author__cover--bg" data-bg="img/bg/bg-small4.png">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar6.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Mona Lott</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@fantraingle</Link></h3>
                                <p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>5 924</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover author__cover--bg" data-bg="img/bg/bg-small5.png">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar">
                                    <img src="img/avatars/avatar7.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Orson Carte</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@sc00ty</Link></h3>
                                <p className="author__text">It is a long established fact that a reader will be distracted</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>11 342</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="author">
                            <Link to="/author" className="author__cover author__cover--bg" data-bg="img/bg/bg-small6.png">
                            </Link>
                            <div className="author__meta">
                                <Link to="/author" className="author__avatar author__avatar--verified">
                                    <img src="img/avatars/avatar8.jpg" alt="" />
                                </Link>
                                <h3 className="author__name"><Link to="/author">Ray Gunn</Link></h3>
                                <h3 className="author__nickname"><Link to="/author">@justart</Link></h3>
                                <p className="author__text">All the Lorem Ipsum generators on the Internet</p>
                                <div className="author__wrap">
                                    <div className="author__followers">
                                        <p>1245</p>
                                        <span>Followers</span>
                                    </div>
                                    <button className="author__follow" type="button">Follow</button>
                                </div>
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
                                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg></Link>
                                </li>
                                <li className="active"><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">4</Link></li>
                                <li>
                                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Authors;