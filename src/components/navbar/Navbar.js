import React,{useState} from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsSnapchat } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import {ImCross} from 'react-icons/im'

import Mobfoot from '../mobifooter/Mobfoot';


function Navbar() {
    const[isMobile,setIsMobile]=useState(false);
    
    return (
        <nav className='navbar'>
            <h3 className='head'>ASHU<span className='head'> </span >D<span className='head'><BsHeart className='heart'/>ST</span></h3>
            <ul className={isMobile?'nav-links-mobile':'nav-links'}
            onClick={()=>setIsMobile(false)}>
                <Link to='/' className='home'>
                    <li>Home</li>
                </Link>
                <Link to='/about' className='about'>
                    <li>About</li>
                </Link>
                <Link to='/skills' className='skill'>
                    <li>Videos</li>
                </Link>
                <Link to='/contact' className='contact'>
                    <li>Contact</li>
                </Link>
                <Link to='/signup' className='signup'>
                    <li>SignUp</li>
                </Link>
                <li className='social-link'><a href='https://www.instagram.com/am.ashu.universe/'><BsInstagram className='insta'/></a></li>
                <li className='social-link'><a href='https://www.snapchat.com/amashuuniverse'><BsSnapchat className='snap'/></a></li>
                <li className='social-link'><a href='https://www.linkedin.com/in/ashukrishnan09/'><BsLinkedin className='linkedIn'/></a></li>
                <li className='social-link'><a href='https://github.com/ashukrishnan09'><BsGithub className='git'/></a></li>
                <Mobfoot/>
                </ul>
                <button className='mobile-menu-icon'
                onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile?<ImCross className='cross' />  :<GoThreeBars className='bar'/>}
                </button>

                

        </nav>
    );
}

export default Navbar;