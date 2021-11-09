import { Component, Fragment } from "react";
import { NavBar } from "./NavBar";

import Login from "./Login";
import NoMatchPage from "./NoMatchPage";
import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";
import ShoppingCard from "./ShoppingCard";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/customers" exact element={<CustomerList />} />
          <Route path="/card" exact element={<ShoppingCard />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </Fragment>
    );
  }
}
