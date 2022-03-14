import React , {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect,} from "react-router-dom";
import {Navbar} from './Components/Navbar';
import {MainBody} from './Components/MainBody';
import {Footer} from './Components/Footer';
import { NearestRides } from './Components/NearestRides';
import { UpcomingRides } from './Components/UpcomingRides';
import { PastRides } from './Components/PastRides';

function App() {
  const [user,setUser] = useState([]);
  const [ridesObj,setRides] = useState([]);

  //fetch user data api
  const fetchUseData=()=> {
      fetch("https://assessment.api.vweb.app/user")
      .then(res=> res.json())
      .then(data=> {
        setUser(data)
         console.log(data);
      })
  }

  useEffect(() => {
    fetchUseData();
  }, [])
  

    //api data fetch
    const fetchData =()=> {
      fetch("https://assessment.api.vweb.app/rides")
      .then(response => response.json())
      .then(data =>{
        setRides(data);
         console.log(data);
      }) 
    }
    
    useEffect(()=>{
      fetchData(); //calls fetchData func
    },[])

  return (
    <div className="App">
    <Router>
        <Navbar user={user}/>  
      <Routes>  
         <Route exact path='/' element={<MainBody user={user}  ridesData={ridesObj}/>} >  
            <Route path='nearest' element={ <NearestRides user={user}  ridesObj={ridesObj}/>} />  
            <Route path='upcoming' element={ <UpcomingRides user={user}  ridesObj={ridesObj}/>} />  
            <Route path='past' element={ <PastRides user={user}  ridesObj={ridesObj}/>} />  
           {/* <Footer /> */}
        </Route >
      </Routes>
    </Router>
    </div>
  );
}

export default App;
