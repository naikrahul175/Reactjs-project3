import React, {useState} from 'react';
import  "../Css/rideList.css";

export const RideList = ({ridesData,user}) => {
  
  // const getStationPath =(data)=>{
  //   {getStationPath(data.station_path)}
  // }

    //Sc=> station code 
  const getDistance =(rideSC, userSC)=> {
     // console.log(userSC, rideSC);
     let smallest =0;
     let result = 0;
     for(let i=0; i<rideSC.length/2; i++) {
       if(userSC == rideSC[i] || rideSC[i] > userSC ) {
         return smallest = rideSC[i] - userSC;
       }
     }
  }
  // {getDistance(data.station_path, user.station_code)} //call for get distance
  return (
    <div className='rideListData'> 
    {/* { ridesData.map(data=>{ */}
           {/* return(  */}
             <div className=" display-list" key="el.id">
                  <div className="ride-left">
                    <img src="{data.map_url}" alt="NW" />
                  </div>
                  <div className="ride-middle">
                    <pre>
                        Ride id: <br/>
                        Origin Station: <br/>
                        Station path:<br/>
                        Date: <br/>
                        Distance: 
                    </pre>
                  </div>
                  <div className="ride-right">
                  <h4>state</h4>
                  </div>
              </div>
           {/* )} */}
    {/* )} */}
     </div>
  )}
