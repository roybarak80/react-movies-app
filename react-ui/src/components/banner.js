import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
   
        return (
            <div className="banner">
                <div className ="main_cover">
                  <div className = "logo">MUSIC-DB<br/>
                  <Link to="/movies">movies</Link>
                  </div>
                 
                </div>
                <span></span>
           </div>
        )
    
}

export default Banner;