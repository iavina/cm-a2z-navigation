
export const createWorldMap = () => {

	let utc = 0;
	const updateUTCTime = () => {
		const now = new Date();
		const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
		const cityTime = new Date(utcTime + utc * 3600000);
		handleTime(cityTime);
	}
	setInterval(() => {
		updateUTCTime()
	}, 1000)


	document.addEventListener("section:changed", event => {

		const city = event.detail;
		utc = city.utc;
		handleSectionChanged(city);
		updateUTCTime()
	});
}

const handleSectionChanged = (data) => {

	// Query the elements that we'll need
	const map = document.querySelector("#world-map");
	const marker = document.querySelector("#world-marker");
	const circle = document.querySelector("#world-circle");
	const city = document.querySelector("#city");

	// X and Y are parecentages
	const x = data.position.x;
	const y = data.position.y;

	// Gather position data from the map to use as a base
	const mapRect = map.getBoundingClientRect();
	const mapStyles = window.getComputedStyle(map);
	const mapLeft = parseFloat(mapStyles.marginLeft);
	const mapTop = parseFloat(mapStyles.marginTop);

	// Calculate the new position for the marker
	const newX = mapLeft + (mapRect.width * (x / 100));
	const newY = mapTop + (mapRect.height * (y / 100));

	// Apply content and animations
	city.textContent = data.label;

	marker.style.transform = `translate(${newX}px, ${newY}px)`;

	circle.classList.remove('bounce');
	void marker.offsetWidth;
	circle.classList.add('bounce');

	// Move clock to the left or right depending on the position of the marker
	const clockFrame = document.querySelector(".clock");
	clockFrame.style.transform = `translateX(${x > 50 ? -210 : 10}px)`
}

const handleTime = time => {

	const timeElement = document.querySelector("#time");
	timeElement.textContent = time.toLocaleTimeString();
}
