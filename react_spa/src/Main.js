import React, { Component } from "react";

// import from React-Router
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom"

import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"

// "Hash Router" defines our "routing region"
// Note the use of NavLink and Route
// Note the addition of "exact" to the Home path

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<h1>Simple SPA</h1>
					<ul className="header">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/stuff">Stuff</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
					<div className = "content">
						
						<Route exact path="/" component={Home}/>
						<Route path="/stuff" component={Stuff}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main