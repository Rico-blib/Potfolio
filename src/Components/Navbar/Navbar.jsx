import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="wrapper">
        {/*left-side*/}
        <div className="l-side">
            <div className="n-name">Erick</div>
            <span><Toggle/></span>
        </div>
        {/*right-side*/}
        <div className="r-side">
            <div className="r-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass"><li>Home</li></Link>

                    <Link spy={true} to="Services" smooth={true}> <li>Services</li></Link>

                    <Link spy={true} to="Contact" smooth={true}><li>Contact</li>
                   </Link>
                   
                    
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar