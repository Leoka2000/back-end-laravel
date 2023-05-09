
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/main/home/home';
import IndividualPages from './pages/individual/single-page';

function RoutesMain() {
  return (
    <BrowserRouter>
      <Router>
        {/* <Navbar/> */}
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route  path='/scholarship-single/:id' element={<IndividualPages />}  /> 
              {/* <Route path='/portfolio' element={<Portfolio />} />  */}
              {/* <Route path='/*' element={<Error />} />  */}
              
            </Routes>  
           
      </Router>
      </BrowserRouter>
  );
}

export default RoutesMain;
