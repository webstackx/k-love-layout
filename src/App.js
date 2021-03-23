import React, { Component } from "react";
import Home from "./routes/Home";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Theme1 from "./routes/Theme1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/theme1" component={Theme1} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
