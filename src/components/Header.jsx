import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
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
  )
}

export default Header