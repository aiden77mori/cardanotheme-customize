import React from 'react';
import { Link } from 'react-router-dom';
import useAddLibrary from '../../components/useAddLibrary';

function Navbar() {
    useAddLibrary(`${process.env.PUBLIC_URL}/js/main.js`);


    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <Link to="/">
                        <img src="img/logo.svg" alt="" />
                    </Link>
                </div>

                <form action="#" className="header__search">
                    <input type="text" placeholder="Search items, collections, and creators" />
                    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
                    <button type="button" className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
                </form>

                <div className="header__menu">
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <button className="header__nav-link" id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></button>

                            <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenuHome">
                                <li><Link to='/home1'>Home style 1</Link></li>
                                <li><Link to='/home2'>Home style 2</Link></li>
                                <li><Link to='/'>Home style 3</Link></li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-link" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></button>

                            <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu">
                                <li><Link to='/explore'>Explore style 1</Link></li>
                                <li><Link to='/explore2'>Explore style 2</Link></li>
                                <li><Link to='/explore3'>Explore style 3</Link></li>
                                <li><Link to='/item'>Item style 1</Link></li>
                                <li><Link to='/item2'>Item style 2</Link></li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/activity" className="header__nav-link">Activity</Link>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-link" id="dropdownMenu0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></button>

                            <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu0">
                                <li><Link to="/token">Unitok</Link></li>
                                <li className="dropdown-submenu">
                                    <Link to="#" className="dropdown-item" role="button" id="dropdownMenuSub" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></Link>

                                    <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenuSub">
                                        <li><Link to="/blog1">Blog style 1</Link></li>
                                        <li><Link to="/blog2">Blog style 2</Link></li>
                                        <li><Link to="/article">Article</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/faq">Help center</Link></li>
                                <li><Link to="/contacts">Contacts</Link></li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-link" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></button>

                            <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu1">
                                <li><Link to="/authors">Authors</Link></li>
                                <li><Link to="/author">Author</Link></li>
                                <li><Link to="/collection">Collection</Link></li>
                                <li><Link to="/create">Create</Link></li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-link header__nav-link--menu" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/></svg></button>

                            <ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu2">
                                <li><Link to="/signin">Sign in</Link></li>
                                <li><Link to="/signup">Sign up</Link></li>
                                <li><Link to="/forgotpass">Forgot password</Link></li>
                                <li><Link to="/notfound">404 Page</Link></li>
                                <li><Link to="/privacypolicy">Privacy policy</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="header__actions">
                    <div className="header__action header__action--search">
                        <button className="header__action-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
                    </div>

                    <div className="header__action header__action--signin">
                        <Link className="header__action-btn header__action-btn--signin" to="/signin">
                            <span>Sign in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"/></svg>
                        </Link>
                    </div>
                </div>

                <button className="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

        </header>
    )
}

export default Navbar;