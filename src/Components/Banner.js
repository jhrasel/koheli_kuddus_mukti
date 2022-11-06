import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import BannerTwo from "../Assets/images/Banner/banner-1.jpg";
import BannerOne from "../Assets/images/Banner/banner-2.jpg";
import BannerThree from "../Assets/images/Banner/banner-3.jpg";
import BannerFour from "../Assets/images/Banner/banner-4.jpg";
import axios from 'axios';
import { baseUrl } from '../URL';

// Import Swiper React components
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Banner() {


  let [bannerData, setbannerData] = useState([]);


  useEffect(()=> {

    axios.get(baseUrl+'/banners').then(({data})=>{

      setbannerData(data.data);
        
    })

  },[])



  return (
    <section id="banner">
      {/* <div className="container"> */}
      {/* SLIDER */}
      <div className="slider_container">
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          
          
          {
            bannerData.map((item, key)=>(

              <SwiperSlide key={key}>
                <img src={'https://koheli.sscquizcontest.com/'+item.photo} alt="banner-img" />
              </SwiperSlide>

            ))
          }
          
        </Swiper>
      </div>

      <div className="container">
        {/* BANNER HEADING TEXT WITH BUTTON */}
        <div className="banner_heading">
          <h1 className="bn">
            <Typewriter
              words={[
                // Max 60 character
                "আপনাদের দোয়া ও ভালবাসায় জনগনের সেবায় নিবেদিত প্রাণ",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </h1>
          {/* <h1>আপনাদের দোয়া ও ভালবাসায় জনগনের সেবায় নিবেদিত প্রাণ </h1> */}
          <button className="btn">যোগাযোগ করুন</button>
        </div>
      </div>
    </section>
  );
}
