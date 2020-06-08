import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({setIsOpen}) => {
  return (
    <nav className="navbar">
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo"/>
            <button type='button' className="toggle-btn" onClick={()=>setIsOpen(true)}>
              <FaAlignRight></FaAlignRight>
            </button>
          </div>
            <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </div>
    </nav>
  )
} 

export default Navbar
