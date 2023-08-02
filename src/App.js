import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,comedy,toprated,upcoming,nowplaying,horror} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={nowplaying} title='Now Playing'/>
      <RowPost url={action} title='Action and Adventure Movies ' isSmall/>
      <RowPost url={comedy} title=' Exciting Comedy Movies ' isSmall/>
      <RowPost url={horror} title='  Horror Movies ' isSmall/>
      <RowPost url={upcoming} title=' Upcoming Releases ' isSmall/>
      <RowPost url={toprated} title='All time Top Rated' isSmall/>
    </div>
  );
}

export default App;
