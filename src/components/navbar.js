import React, { Component } from 'react';
import RutubeLogo from './svg/rutube';
import BurgerSVG from './svg/burger'
import AddSVG from './svg/add'
import NotificationSVG from './svg/notification'
import SignSVG from './svg/sign'
import SearchSVG from './svg/search';


class Navbar extends Component {
  render() {
    return (
        <div className="navbar bg-base-100 custom-navbar">
            <div className="navbar-start">
                <div>
                    <button className="btn btn-square btn-ghost">
                    <BurgerSVG/>
                    </button>
                </div>
                <div>
                    <a href='/'><RutubeLogo/></a>
                </div>
            </div>
            <div className="navbar-center">
                
                <div className="form-control search-input">
                    <input type="text" placeholder="Поиск" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
            <span className='left-middle'></span>
            <div className="navbar-end">
                <div className='search-icon'>
                    <SearchSVG/>
                </div>
                <div className="circle">
                    <AddSVG/>
                </div>
                <span className='small'></span>
                <div className="circle">
                    <NotificationSVG/>
                </div>
                <span className='middle'></span>


                <div className='sign-icon'>
                    <SignSVG/>
                </div>
                <div className="sign-button">
                    <button className="btn btn-accent">
                        <p>Вход и регистрация</p>
                    </button>
                </div>
                    
            </div>
        </div>
    )
  }
}

export default Navbar;