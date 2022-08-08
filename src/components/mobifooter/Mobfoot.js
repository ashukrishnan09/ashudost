import React from 'react';
import './mobfoot.css'

import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsSnapchat} from 'react-icons/bs'

function Mobfoot() {
    return (
        <footer className='footer'>
      <a href='#'className='footer__logo'>ASHU KRISHNAN</a>

     

      <div className="footer__socials">
        <a href='https://www.instagram.com/am.ashu.universe/'className='footer__socials-icon'><BsInstagram/></a>
        <a href='https://www.snapchat.com/amashuuniverse/'className='footer__socials-icon'><BsSnapchat/></a>
        <a href='https://www.linkedin.com/in/ashukrishnan09//'className='footer__socials-icon'><BsLinkedin/></a>
        <a href='https://github.com/ashukrishnan09'className='footer__socials-icon'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>2022  &copy;Ashu Krishnan.All right reserved.</small>
      </div>
  
    </footer>
    );
}

export default Mobfoot;