import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import ImageCarousel from './ImageCarousel';

function Home() {
    
  return (
    <>
    <body>
      
   
     <header>
        <div className="header">
           <h2 className="logo">INFO-HELP</h2>
           <div className="links">
            <a><Link to="/medication">Medication</Link></a>
            <a><Link to="/food">Food</Link></a>
            <a><Link to="/accomodation">Accomodation</Link></a>
            <a><Link to="/hygiene">Hygiene</Link></a>
            <a><Link to="/legal&safety">Legal & Safety Info</Link></a>
           </div>
        
           <div class="dropdown">
                <button class="dropbtn">More</button>
                <div class="dropdown-content">
                    <a> <Link to="/language">Language Learning Locations</Link></a>
                    <a ><Link to="/psychology">Psychological Help</Link></a>
                    <a ><Link to="/education">Education</Link></a>
                    <a ><Link to="/scolarships">Scolarships</Link></a>
                    <a ><Link to="/social">Social and Cultural Activities</Link></a>
                    <a ><Link to="/sports">Sports</Link></a>
                </div>
          </div>
        </div>    
      </header>

      <section>
        <ImageCarousel/>
      </section>

      <footer>
        <div className="footer-container">
            <div className='footer-links'>
                <h2>About us</h2>
               <h2>Feedback and Support</h2>
                <h2>Terms and privacy</h2>
            </div>
            <div className='footer-icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
 
        </div>
         
         <div className='p-footer'>
          <p>
            &copy; INFO-HELP all rigths reserved
        </p>
         </div>
        
      </footer>
      </body>
    </>
   
  )
}

export default Home

