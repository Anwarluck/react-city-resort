import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms" component={Rooms} />
				<Route exact path="/rooms/:khan" component={SingleRoom} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
