import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {BsMusicNote} from 'react-icons/bs';                  //Icons are used from react-cons.github.io
import {ImCross, ImMenu} from 'react-icons/im';                  
import Button from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);          //useState is a hook that allows us to use state variables in functional components      
    const [button, setButton] = useState(true);



    const handleClick = () => setClick(!click);
    const CloseMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
        };

        useEffect(() => {
            showButton();                                       //Use so that the "text me" button does not show up after every time we refresh
        },[]);
        window.addEventListener('resize', showButton);          //When we resize the screen addWventListener gets activated and showButton is called to resize

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={CloseMobileMenu}>
                    VIGGI<BsMusicNote />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <ImCross/>  : <ImMenu/>} 
                </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link 
                            to='./home' 
                            className='nav-links' 
                            onClick={CloseMobileMenu}>
                            Home
                            </Link>
                        </li>

                        <li className = 'nav-item'>
                            <Link 
                            to='./projects' 
                            className='nav-links' 
                            onClick={CloseMobileMenu}>
                            Projects
                            </Link>
                        </li>

                        <li className = 'nav-item'>
                            <Link 
                            to='./internship' 
                            className='nav-links' 
                            onClick={CloseMobileMenu}>
                            Internship
                            </Link>
                        </li>

                        <li className = 'nav-item'>
                            <Link 
                            to='./music' 
                            className='nav-links' 
                            onClick={CloseMobileMenu}>
                            Music
                            </Link>
                        </li>
                        <li>
              <Link
                to='./textme'
                className='nav-links-mobile'
                onClick={CloseMobileMenu}
              >
                Text Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Text Me</Button>}
        </div>
        </nav>
    </>
    );
}

export default Navbar;
