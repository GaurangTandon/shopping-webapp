import React from "react";
import {
    Route, Link, BrowserRouter as Router, Switch,
} from "react-router-dom";
import CreateModal from "./Create";
import Modal from "./components/auth/Login";
import NotFound from "./404";
import history from "./history";
import { getLoggedInUser } from "./utils/getLoggedInUser";
import { LogOutBtn } from "./logOut";


const currentUser = getLoggedInUser(),
    welcomeElm = currentUser ? () => <h1>Hi {currentUser}</h1> : Modal,
    logOutBtn = currentUser ? <LogOutBtn></LogOutBtn> : <span></span>,
    routing = (<Router history={history}>
        <div>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Shopping webapp</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {logOutBtn}
                </div>
            </div>
            {/* switch helps us specify a default case if no route path matches */}
            <Switch>
                <Route path="/" exact component={welcomeElm}></Route>
                <Route path="/create" exact component={CreateModal}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </Router>);


export default routing;
