import React, { Component } from "react";
import Landing from "./containers/Landing/Landing";
import Meet from "./containers/Search/Meet";
import { Route } from "react-router-dom";

class App extends Component {

  render(){
        return(
          <div>
            <Route exact path='/' render={() => (
              <Landing/>)}
            />
            
            <Route exact path='/meet' component={() => (
              <Meet/>)}
            />
          </div>
      )
    }
}


export default App;
