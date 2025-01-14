import { createNavBar } from "./navbar/navbar.js"
import { createWorldMap } from "./world-map/world-map.js";

// Load data and setup events
document.addEventListener("DOMContentLoaded", async () => {

	// Fetch the JSON file
	const response = await (fetch("navigation.json"));
	const data = await response.json();

	createWorldMap();

	const navList = document.getElementById("nav-list");
	createNavBar(data, navList)
})

