import React ,{useEffect} from 'react'
import video from "../../Assests/video(1).mp4";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { FaTripadvisor } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { TbAppsFilled } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css';


const  Home=()=> {


   useEffect(()=>{
    Aos.init({duration:2000})
   },[])


  return (
    <section className="home">
      <div className="overlay"></div>
<video src={video} muted autoplay loop type="video/mp4"></video>
<div className="homeContent container">
  <div className="textDiv">
    <span data-aos="fade-up" className='smallText'>
      Our Packages
    </span>
<h1 data-aos="fade-up" className="hometitle">
  Search Your Destination
</h1>

  </div>

  <div data-aos="fade-up" className="cardDiv grid">
    <div className="destinationInput">
      <label htmlFor="city">Search Your Destination</label>
      <div className="input flex">
        <input type="text" placeholder='Enter name here' />
        <GrLocation className='icon'/>
      </div>
    </div>

    <div className="dateInput">
      <label htmlFor="date">Select your date</label>
      <div className="input flex">
        <input type="date" style={{color:"white" , fontSize:"18px"}} placeholder='Enter date here' />
        {/* <GrLocation className='icon'/> */}
      </div>
    </div>



    <div className="priceInput">
     <div className="label_total flex">
      <label htmlFor="price">Max price:</label>
     
     <h3 className="total">$5000</h3>
    </div>
<div className="input flex">
<input type="range"  max="5000" min="1000" />
</div>
</div>



<div className="searchOptions flex">
<HiFilter className='icon'/>
<span>More Filters</span>
</div>
  </div>

  <div data-aos="fade-up" className="homeFooterIcon flex">
    <div className="rightIcons">
    <FiFacebook className='icon'/>
    <CiInstagram className='icon'/>
    <FaTripadvisor className='icon' />
    </div>
<div className="leftIcons">

<FaListCheck className='icon'/>
<TbAppsFilled className='icon'/>
</div>
  </div>
</div>
    </section>
  )
}

export default Home