import React ,{useEffect} from 'react'
import "./main.scss";
import img from "../../Assests/img(1).jpg";
import img2 from "../../Assests/img(2).jpg";
import img3 from "../../Assests/img(3).jpg";
import img4 from "../../Assests/img(4).jpg";
import img5 from "../../Assests/img(5).jpg";
import img6 from "../../Assests/img(6).jpg";
import img7 from "../../Assests/img(7).jpg";
import img8 from "../../Assests/img(8).jpg";
import img9 from "../../Assests/img(9).jpg";
import img10 from "../../Assests/img(10).jpg";
import img11 from "../../Assests/img(11).jpg";
import img12 from "../../Assests/img(12).jpg";
import Aos from "aos";
import 'aos'
import 'aos/dist/aos.css';


import { TfiLocationPin } from "react-icons/tfi";
import { BsFillClipboardHeartFill } from "react-icons/bs";


const Data=[
  {
    id:4,
    imgSrc:img4,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  {
    id:5,
    imgSrc:img5,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  {
    id:6,
    imgSrc:img6,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  {
    id:7,
    imgSrc:img7,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },
  {
    id:1,
    imgSrc:img,
    desTitle:'Bora Bora',
    name:'New Zealand',
    grade:"Cultural Relax",
    fees:'$7000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },
  {
    id:2,
    imgSrc:img2,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  {
    id:3,
    imgSrc:img3,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  // {
  //   id:4,
  //   imgSrc:img4,
  //   desTitle:'abcd efgh',
  //   name:'Paris',
  //   grade:"Cultural Relax",
  //   fees:'$10000',
  //   description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  // },

  // {
  //   id:5,
  //   imgSrc:img5,
  //   desTitle:'abcd efgh',
  //   name:'Paris',
  //   grade:"Cultural Relax",
  //   fees:'$10000',
  //   description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  // },

  // {
  //   id:6,
  //   imgSrc:img6,
  //   desTitle:'abcd efgh',
  //   name:'Paris',
  //   grade:"Cultural Relax",
  //   fees:'$10000',
  //   description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  // },

  // {
  //   id:7,
  //   imgSrc:img7,
  //   desTitle:'abcd efgh',
  //   name:'Paris',
  //   grade:"Cultural Relax",
  //   fees:'$10000',
  //   description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  // },

  {
    id:8,
    imgSrc:img8,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  {
    id:9,
    imgSrc:img9,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },

  {
    id:10,
    imgSrc:img10,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },{
    id:11,
    imgSrc:img11,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },
  {
    id:12,
    imgSrc:img12,
    desTitle:'abcd efgh',
    name:'Paris',
    grade:"Cultural Relax",
    fees:'$10000',
    description:'Hello, this is Copilot. Travel is a word that can be used as a verb or a noun. As a verb, it means to go on or as if on a trip or tour, or to move or undergo transmission from one place to another. As a noun, it means the act or means of traveling, or an account of one’s travels. '
  },
 
]
const Main = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited destinations
        </h3>
      </div>

      <div className="secContent grid">


        {
          Data.map(({id , imgSrc , desTitle , name,grade ,fees,description})=>{

            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className="continent flex">
                  <TfiLocationPin className='icon'/>
                  
                  <span className="name">{name}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span >{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h4>{fees}</h4>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>


                  <button className="btn flex">Details
                  <BsFillClipboardHeartFill className="icon"/>
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main