import React from 'react';
import  logo  from '../logo.svg';
import './Header.css';
const Header = () => { 
    return <header className="w-100 shadow-1 bg-blue">
        <div className="f3 pa2 flex items-center">
            <div className="logo">
                <i className="fas white mh3 f3 pa2 fa-hand-holding-usd">
                </i>
            </div>
            <div className="account-group flex flex-row-reverse flex-auto items-center">
                <i className="ph2 dim white pointer f3 far fa-user-circle"></i>
                <i className="f3 ph2 white pointer dim fas fa-cog"></i>
            </div>
           
            
                
                
            </div>
    </header> 
}
export default Header