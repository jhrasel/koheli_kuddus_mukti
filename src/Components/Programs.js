import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../URL";

// var monthName = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const programList = [
//   {
//     // MAXIMUM 70 CHARACTER FOR PROGRAM TITLE
//     programTitle:
//       "Meeting with Ministry of Environment for socializing lll ssfs sdfjkkl efsdfo fsdfsdffs ffsdsd ",
//     date: `Yesterday`,
//     time: `09 : 10 AM`,
//   },
//   {
//     programTitle: "Opening Ceremony of Mohammadpur high school",
//     date: `Today`,
//     time: `09 : 10 AM`,
//   },
//   {
//     programTitle: "Opening Ceremony of Mohammadpur high school",
//     date: `Tommorow`,
//     time: `09 : 10 AM`,
//   },
//   {
//     programTitle: "Opening Ceremony of Mohammadpur high school",
//     date: `${new Date().getDate() + 2} ${monthName[new Date().getMonth()]}`,
//     time: `09 : 10 AM`,
//   },
// ];

export default function Programs({ allData }) {


  let [schedule, setSchedule] = useState([]);
  let [data, setData] = useState([]);


  useEffect(()=> {

    axios.get(baseUrl+'/schedule').then(({data})=>{

      setSchedule(data.data);
        
    })

  },[]);

  // আমার আসন্ন প্রোগ্রামসমুহ Data
  useEffect(()=> {

    axios.get(baseUrl+'/home/page-data').then(({data})=>{

      setData(data.data);
        
    })

  },[])


  return (
    <section id="programs">
      <div className="container">
        <div className="section_text">
          <h2>
            {data.program_title}
          </h2>
          <p>{data.program_description}</p>

          <button className="btn_outline">
            {allData?.program_btn_text
              ? allData.program_btn_text
              : "সাক্ষাৎ এর জন্য সময় বুক করুন"}
          </button>
        </div>

        {/* <div className="program_list_container">
          {programList.map((program, index) => (
            <div className={`programInfo ${program.date}`} key={index}>
              <div className="date_area">
                <p>{program.date}</p>
                <b>{program.time}</b>
              </div>
              <p className="program_title">{program.programTitle}</p>
            </div>
          ))} */}

          <div className="program_list_container">

            {

              schedule.map((item, key)=>
                
                <div className="programInfo" key={key}>
                  <div className="date_area">
                    <p>{item.date}</p>
                    <b></b>
                  </div>
                  <p className="program_title">{item.description}</p>
                </div>

              )

            }

          </div>



        </div>
    </section>
  );
}
