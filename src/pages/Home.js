import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Home() {
	return (
		<Hero>
			<Banner
				title="Luxurious rooms"
				subtitle="first-class rooms starting at $800">
				<Link to="/rooms" className="btn-primary">
					our rooms
				</Link>
			</Banner>
		</Hero>
	);
}

export default Home;
