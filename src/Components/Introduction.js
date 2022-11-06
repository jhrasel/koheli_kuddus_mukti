import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../URL";
// import Introduction_Image from "../Assets/images/Introduction_Image.jpg";

export default function Introduction({ allData }) {


  let [data, setData] = useState([]);


  useEffect(()=> {

    axios.get(baseUrl+'/home/page-data').then(({data})=>{

      setData(data.data);
        
    })

  },[])



  return (
    <section id="introduction">
      {/* <img src={Introduction_Image} alt="Introduction_Image" /> */}
      <img
        src={'https://koheli.sscquizcontest.com/'+data.about_img}
        alt="Introduction_Image"
      />

      <div className="introduction_text">
        <h2>আমার পরিচিতি</h2>
        <p>{allData?.about_description}</p>
        <b>
          {allData.about_name ? allData.about_name : "কোহেলী কুদ্দুস মুক্তি"}
        </b>
        <span>{allData?.title}</span>
      </div>
    </section>
  );
}
