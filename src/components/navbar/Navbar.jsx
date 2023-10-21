import { useState } from "react"
import "./navbar.css"
import Logo from '../../assets/logo.svg'
import {RiMenu3Line, } from 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri';

const Menu = () =>(
 <>
     <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT3?</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Liberary</a></p>
  </>
)

export const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">  
     <div className="gpt3__navbar-links"> 
     <div className="gpt3__navbar-links_logo"></div> 
      <img src={Logo} alt=""/>
     </div>
     <div className="gpt3__naavbar-links_container">
      <Menu/>
     </div>
     <div className="gpt3__navbar-sign">
      <p>sign in</p>
      <button type="button">sign Up</button>
     </div>
     <div className="gpt3__navbar-menu">
      {
        toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
        :<RiMenu3Line color="#fff" size={27}  onClick={() => setToggleMenu(true)}/>
      }{
        toggleMenu && (
          <div className="gpt3__navbar-menu_container  scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
                <Menu/>
            </div>
            <div className="gpt3__navbar-menu-sign">
      <p>sign in</p>
      <button type="button">sign Up</button>
     </div>
          </div>
        )
      }
     </div>
    </div>
  )
}
