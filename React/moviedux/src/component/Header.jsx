import React from 'react';
import '../styles.css';

function Header() {
    return (
        <div className = 'header'>
            <img className='logo' src='logo.png' alt='moviedux'/>
            <h2 className='app-subtitle'> It is time for popcorn! Find your next movie here.</h2>
        </div>
    );
}

export default Header;