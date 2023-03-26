import React from 'react';
import svgLogo from '../../../assets/images/Logo.svg';
import './logo.scss'

function Logo()  {
        return (
            <div className = 'logo-flex-container'>
                 <div id = 'logo-img'>
                    <img id = 'application-logo' src = {svgLogo} alt='logo' />
                </div>

                <div className='logo-text'>
                    <h1>XENOPEDIA</h1>
                    <h2>Find the funniest copy-pastes around the Internet!</h2>
                </div>
                
                <div className='empty-logo-right'></div>
            </div> 
            );
}

export default Logo;