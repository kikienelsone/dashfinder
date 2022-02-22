import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Finalize from "./Finalize/Finalize";
import Results from "./Results/Results";
import "./App.css"
import React from "react";
import Filter from "./Filter/Filter";


function App() {
  return (
    <div className="App">

<Router>

    <Routes>
        <Route exact path="/" element={<Dashboard/>}></Route>
        <Route path="/finalize" element={<Finalize/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
    </Routes>

</Router>
    </div>
  )
}

export default App;
