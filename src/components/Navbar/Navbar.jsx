import React  , {useState}from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import "./navbar.css";
const Navbar = () => {


  const [active,setActive]=useState('navBar')

const showNav=()=>{
  setActive('navBar activeNavbar');
}

const removeNavbar=()=>{
  setActive('navBar removeNavBar' );
}


  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1 className="logo flex"><SiYourtraveldottv className="icon"/>Travel</h1>
          </a>
        </div>
<div className={active}>
  <ul className="navLists flex">
    <li className="navItem">
      <a href="" className="navLink">Home</a>
    </li>

    <li className="navItem">
      <a href="" className="navLink">Package</a>
    </li>

    <li className="navItem">
      <a href="" className="navLink">Shop</a>
    </li>

    <li className="navItem">
      <a href="" className="navLink">About</a>
    </li>

    <li className="navItem">
      <a href="" className="navLink">Pages</a>
    </li>

    <li className="navItem">
      <a href="" className="navLink">News</a>
    </li>

    <li className="navItem">
      <a href="" className="navLink">Contact</a>
    </li>

    <button className="btn">
    <a href="">Book Now</a>
  </button> 
  </ul>


<div  onClick={removeNavbar} className="closeNavbar">
<IoIosCloseCircle className="icon"/>
</div>

{/* <div className="toggleNavbar">
<PiDotsNineBold className="icon"/>
</div> */}

</div>
<div  onClick={showNav} className="toggleNavbar">
<PiDotsNineBold className="icon"/>
</div>


      </header>
    </section>
  )
}

export default Navbar;


