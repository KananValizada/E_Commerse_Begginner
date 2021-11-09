import { Component, Fragment } from "react";
import { NavBar } from "./NavBar";
import MainContent from "./MainContent";

export default class App extends Component{
    render(){
        return <Fragment>
                <NavBar />
                <MainContent/>
            </Fragment>
    }
}