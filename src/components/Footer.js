import React from 'react'
import logo from '../images/Logo .svg';

const Footer = () => {
  return (
    <div>
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>We are a family owned Mediterrean resturant focused on tradional recipes served with a modern twist</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservation</a></li>
                    <li><a href='/'>Order Online</a></li>

                </ul>
            </div>
            <div>
            <h3>Contact Us</h3>
            <ul>
                <li>
                    Address: <br/> 243 street 2nd Lane Chicago USA
                </li>
                <li>
                    Phone: <br/> 012 345 8765
                </li>
                <li>
                    Email: <br/> LittleLemonChi@gmail.com
                </li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>

                </ul>
            </div>
            </section>
        </footer>

    </div>
  )
}

export default Footer
