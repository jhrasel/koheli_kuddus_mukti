import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../URL";

export default function SocialWorks({ allData }) {


  let [data, setData] = useState([]);


  useEffect(()=> {

    axios.get(baseUrl+'/home/page-data').then(({data})=>{

      setData(data.data);
        
    })

  },[])

  return (
    <section id="social_works">

      {/* <div className="section_text">
        <h2 className="bn">
          {allData?.samajik_kormo_heading
            ? allData.samajik_kormo_heading
            : "আমার সামাজিক কর্মকান্ড"}
        </h2>
        <p>{allData?.samajik_kormo_description}</p>
      </div>

      <div className="video_area">
        <iframe
        //   src={`https://www.youtube.com/embed/${allData?.samajik_kormo_link}`}
            src={allData?.samajik_kormo_link}
          //   src="https://www.youtube.com/embed/xFha5XgMdHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}

      <div className="section_text">
        <h2 className="bn">
          {data.samajik_kormo_heading}
        </h2>
        <p>{data.samajik_kormo_description}</p>
      </div>

      <div className="video_area">
        <iframe
        //   src={`https://www.youtube.com/embed/${allData?.samajik_kormo_link}`}
            src={data.samajik_kormo_link}
          //   src="https://www.youtube.com/embed/xFha5XgMdHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}
