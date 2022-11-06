import axios from "axios";
import React, { useEffect, useState } from "react";
import PoliticalImg from "../Assets/images/Political/Political.svg";
import { baseUrl } from "../URL";

export default function PoliticalTour({ allData }) {
  const PoliticalTourInfo = [
    {
      season: allData?.rajniti_date_one,
      title: allData?.rajniti_title_one,
      desc: allData?.rajniti_one_des,
      image: PoliticalImg, //
    },
    {
      season: allData?.rajniti_date_two,
      title: allData?.rajniti_title_two,
      desc: allData?.rajniti_two_des,
      image: PoliticalImg, //
    },
    {
      season: allData?.rajniti_date_three,
      title: allData?.rajniti_title_three,
      desc: allData?.rajniti_three_des,
      image: PoliticalImg, //
    },
    {
      season: allData?.rajniti_date_four,
      title: allData?.rajniti_title_four,
      desc: allData?.rajniti_four_des,
      image: PoliticalImg, //
    },
    {
      season: allData?.rajniti_date_five,
      title: allData?.rajniti_title_five,
      desc: allData?.rajniti_three_five,
      image: PoliticalImg, //
    },
    {
      season: allData?.rajniti_date_six,
      title: allData?.rajniti_title_six,
      desc: allData?.rajniti_three_six,
      image: PoliticalImg, //
    },
  ];


  let [data, setData] = useState([]);


  useEffect(()=> {

    axios.get(baseUrl+'/home/page-data').then(({data})=>{

      setData(data.data);
        
    })

  },[])

  return (
    <section id="political_tour">
      <div className="section_heading_container">
        <h2 className="section_title">
          {data.rajniti_heading}
        </h2>
        <p className="section_description">{data.rajniti_description}</p>
      </div>

      <div className="section_content">
        <div className="political_tour_info_container">
          <div className="middle_line">{/* Middle Line */}</div>

          {PoliticalTourInfo.map((info, index) => (
            <div
              className={`political_tour_info ${index % 2 === 1 && "reverse"}`}
              key={index}
            >
              <div className="info_area">
                <div className="text_area bn">
                  <h6>{info.title}</h6>
                  <p>{info.desc}</p>
                </div>
                <img src={info.image} alt="img" />
              </div>

              <div className="mid_icon">{/* Middle Point */}</div>

              <div className="season bn">{info.season}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
