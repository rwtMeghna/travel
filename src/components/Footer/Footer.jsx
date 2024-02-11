import React ,{useEffect} from "react";
import "./footer.scss";
import video2 from "../../Assests/video(2).mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";
import { FaTripadvisor } from "react-icons/fa";
import { TbCircleChevronRight } from "react-icons/tb";

import Aos from'aos';
import 'aos/dist/aos.css';



const Footer = () => {

useEffect(()=>{
  Aos.init({duration:3000})
},[]);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoplay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" data-aos="fade-up" placeholder="Enter email Address" />
            <button data-aos="fade-up"className="btn flex" type="submit">
              Send
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel
              </a>
            </div>
            <div data-aos="fade-up"className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborumss
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <FaTwitter className="icon" />
              <SiYoutubeshorts className="icon" />
              <CiInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
        </div>

        <div className="footerLink flex">
          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup ">
            <span className="groupTitle">OUR AGENCY</span>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Services
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Insurances
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Tourism
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Agency
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Payment
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">Partnres</span>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Bookings
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Rental Car
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              HostelWorld
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Trivago
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              TripAdvisor
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">Last Minute</span>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              London
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              California
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Indonesia
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Europe
            </li>

            <li className="footerList flex">
              <TbCircleChevronRight className="icon" />
              Ocenaia
            </li>
          </div>
        </div>

        <div className="footerDiv flex">
         <small>Best Travel website</small>
         <small>Copyright -ABCD_2024</small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
