import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import Index from "./components/index";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Index}/>
            <Route  path="/contact" component={Contact}/>
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
