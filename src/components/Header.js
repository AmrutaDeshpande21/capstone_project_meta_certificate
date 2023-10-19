import React from 'react';
import {Link} from 'react-router-dom';
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <div className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Indulge in Mediterranean flavors at our restaurant. 
                    Experience the vibrant tastes of Greece, Italy, Spain,
                     and more, expertly crafted with fresh ingredients. Dive into a culinary
                     journey that celebrates tradition and passion.</p>
                <Link to="/booking"><button aria-label='on Click'>Reserve Table</button></Link>
            </div>
            <div className='banner-img'>
                <img src={bannerImg} alt="banner" />
            </div>

        </section>
        </div>
  );
};

export default Header
