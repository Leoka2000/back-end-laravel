
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/main/home/home';
import IndividualPages from './pages/individual/single-page';
import Navbar from './components/navbar/navbar';

function RoutesMain() {
  return (
    <div className="routes">
      <Router>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route  path='/scholarship-single/' element={<IndividualPages />}  /> 
              {/* <Route path='/portfolio' element={<Portfolio />} />  */}
              {/* <Route path='/*' element={<Error />} />  */}
              
            </Routes>  
           
      </Router>
    </div>
  );
}

export default RoutesMain;
