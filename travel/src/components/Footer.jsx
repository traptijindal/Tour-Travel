import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareBehance, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'; // Note the import for brand icons
import './FooterStyles.css';


function Footer() {
  return (
    <div className='footer'>
     <div className='top'>
        <div>
            <h1>Tourio</h1>
            <p>Choose your favourite destination.</p>
        </div>
        <div>
            <a href="/">
            <FontAwesomeIcon icon={faSquareBehance} className='icon' />
            </a>
            <a href="/">
            <FontAwesomeIcon icon={faFacebook}  className='icon'/>
            </a>
            <a href="/">
            <FontAwesomeIcon icon={faFacebookMessenger}  className='icon'/>
            </a>
        </div>    
            
        </div> 
     <div className='bottom'>
        <div>
         <h4>Project</h4>
         <a href="/">ChangeLog</a> 
         <a href="/">Status</a> 
         <a href="/">License</a> 
         <a href="/">All Versions</a> 
        </div>

        <div>
         <h4>Community</h4>
         <a href="/">GitHub</a> 
         <a href="/">Issues</a> 
         <a href="/">Project</a> 
         <a href="/">Twitter</a> 
        </div>
        <div>
         <h4>Help</h4>
         <a href="/">Support</a> 
         <a href="/">Troubleshooting</a> 
         <a href="/">Contact Us</a> 
         
        </div>
        <div>
         <h4>Others</h4>
         <a href="/">Terms Of Services</a> 
         <a href="/">Privacy Policy</a> 
         <a href="/">License</a> 
         
        </div>
     </div>
    </div>
  )
}

export default Footer;

