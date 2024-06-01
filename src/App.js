import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Sidebar from "./component/SideBar";
import Login from "./component/Login";
import Accueil from "./component/Accueil";
import Offer from "./component/Offer";
import Consulter from "./component/Consulter";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Login/> */}
        <Sidebar />
        <NavBar />
        <div id="content" style={{ marginLeft: "250px", padding: "10px" }}>
          <Routes>
            <Route path="/Acceil" element={<Accueil />} />
            <Route path="/Offer" element={<Offer />} />
            <Route path="/Consulter" element={<Consulter/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
