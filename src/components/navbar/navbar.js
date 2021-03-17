import React from 'react';
import fb from '../../img/fb.png';
import instagram from '../../img/instagram.png';
import './navbar.css';



const Navbar = () => {
    return(
        <div className='flex justify-between'>
            <p>Nadácia Good Boy</p>
            <div>
                <img src={fb}></img>
                <img src={instagram}></img>
            </div>
        </div>
    )
}

export default Navbar;