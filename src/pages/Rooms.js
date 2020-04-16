import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Rooms() {
	return (
		<Hero hero="roomsHero">
			<Banner
				title="Luxury Rooms"
				subtitle="Deluxe rooms avaliable starting from $300">
				<Link to="/" className="btn-primary">
					back to home
				</Link>
			</Banner>
		</Hero>
	);
}

export default Rooms;
