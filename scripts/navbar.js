// Custom Event so that any other object can listen to event changes
const sectionChangedEvent = detail => new CustomEvent("section:changed", {
	bubbles: true,
	detail
})

export const createNavBar = (data, parent) => {

	// The navbar parent listens to section changed event to handle the changed in all its children
	parent.addEventListener("section:changed", event => {
		handleSectionSelected(event.target)
	})

	// Keep track of the first element so we can auto select it
	let firstElement, firstCity;

	// Populate the nav list with the JSON data
	data.cities.forEach((city) => {
		const tag = document.createElement("div");
		tag.className = "nav-item";
		tag.textContent = city.label;
		tag.id = city.section;

		parent.appendChild(tag);

		tag.addEventListener("click", () => {
			tag.dispatchEvent(sectionChangedEvent(city));
		})

		if (firstElement === undefined) {
			firstElement = tag;
			firstCity = city;
		}
	});

	firstElement.dispatchEvent(sectionChangedEvent(firstCity))
}

// Handle selection of different sections
const handleSectionSelected = (target) => {

	const currentlyActive = document.querySelector(".nav-item.active");

	// Early return if the same section was selected
	if (currentlyActive?.id == target.id) return;

	// Remove the active class from the currently active section
	if (currentlyActive) currentlyActive.classList.remove("active");

	// Add the active class to the selected section
	target.classList.add("active");

	// Handle underline animation
	const navBar = document.getElementById("nav-bar");
	const underline = document.querySelector("#underline-active");

	const navBarRect = navBar.getBoundingClientRect();
	const sectionRect = target.getBoundingClientRect();

	const translate = `translate(${sectionRect.left - navBarRect.left}px, -1px)`;
	// The default width of the underline is 100px, so we can just divide by 100 to get normalized scale
	const scale = `scaleX(${sectionRect.width / 100})`;
	underline.style.transform = `${translate} ${scale}`
}
