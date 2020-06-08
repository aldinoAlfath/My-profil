import React, { useState } from 'react';
import Header from './Header.jsx';
import { Button } from '@material-ui/core';
import Jumbotron from './Jumbotron.jsx';
import Main from './main.jsx'
import Baru from "./modal.jsx"
import Footer from './footer.jsx'
 const App = () => {
  return (
    <div className="App">
    <Header /> 
       <Jumbotron />
       <Main />
       <br/>
       <Baru />
       <Footer />
      </div>
  );
}
export default App;
