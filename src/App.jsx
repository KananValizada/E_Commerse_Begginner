import { Component, Fragment } from "react";
import { NavBar } from "./NavBar";

import Login from "./Login";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Login />
      </Fragment>
    );
  }
}
