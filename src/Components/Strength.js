import axios from "axios";
import React, { useEffect, useState } from "react";
import strengthImg from "../Assets/images/strength.svg";
import { baseUrl } from "../URL";

export default function Strength({ allData }) {


  let [data, setData] = useState([]);


  useEffect(()=> {

    axios.get(baseUrl+'/home/page-data').then(({data})=>{

      setData(data.data);
        
    })

  },[])

  const strengthInfo = [
    {
      title: allData?.amar_title_one,
      desc: allData?.amar_title_one_des,
    },
    {
      title: allData?.amar_title_two,
      desc: allData?.amar_title_two_des,
    },
    {
      title: allData?.amar_title_three,
      desc: allData?.amar_title_three_des,
    },
    {
      title: allData?.amar_title_four,
      desc: allData?.amar_title_four_des,
    },
    {
      title: allData?.amar_title_five,
      desc: allData?.amar_title_five_des,
    },
    {
      title: allData?.amar_title_six,
      desc: allData?.amar_title_six_des,
    },
  ];

  return (
    <section id="strength">
      <div className="section_heading_container">
        <h2 className="section_title">আমার শক্তি</h2>
        <p className="section_description">{data.amar_description}</p>
      </div>

      <div className="section_content">
        <div className="img_area">
          <img src={'https://koheli.sscquizcontest.com/'+data.amar_img} alt="strengthImg" />
        </div>
        <div className="strength_Info_container">
          {strengthInfo.map((strg, index) => (
            <div className="strength_Info" key={index + 1}>
              <b className="numbering">{`0${index + 1}`}</b>
              <div className="strength_text">
                <h5 className="bn">{strg.title}</h5>
                <p>{strg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
