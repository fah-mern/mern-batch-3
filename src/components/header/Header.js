import React from 'react'
import logo from '../../assets/1.png'
import './Header.css'
import navlogo from '../../assets/cart-icon.png';
import {Link} from 'react-router-dom'

 function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-inner'>

                <div className='item'>
<Link to="/"><img src={logo} alt=''/></Link>
                </div>

                <div className='item'>
 <ul>
     
 <li><Link to="/account/location">Store Location</Link></li>
 <li><Link to="/account/register">Register/Login</Link></li>
 </ul>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EVERYDAY VALUE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">MAKE IT A MEAL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SIGNATURE BOXES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SHARING</a>
        </li>
      </ul>
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={navlogo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>

    </a>
  </div>
</nav>
    </div>
  </div>
</nav>
            
        </div>
    )
}

export default Header;
