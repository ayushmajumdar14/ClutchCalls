// main.js

// Function to load content for different routes
function loadContent(route) {
    // Your logic to fetch and render content based on the route
    console.log("Loading content for route: " + route);
    
    // Example: Display content in a container with id "content"
    document.getElementById("content").innerHTML = `<h2>${route}</h2><p>This is the content for ${route}.</p>`;
}

// Function to handle navigation
function navigateTo(route) {
    // Update the URL (if needed) and load content
    history.pushState({}, "", route);
    loadContent(route);
}

// Event listener for navigation
window.addEventListener("popstate", function (event) {
    // Handle back/forward button clicks
    loadContent(window.location.pathname);
});

// Initial load
loadContent(window.location.pathname);

// Example: Trigger navigation based on user interactions
document.getElementById("parlaysLink").addEventListener("click", function () {
    navigateTo("/parlays");
});

document.getElementById("ourStoryLink").addEventListener("click", function () {
    navigateTo("/our-story");
});

document.getElementById("regulationsLink").addEventListener("click", function () {
    navigateTo("/regulations");
});

document.getElementById("theTeamLink").addEventListener("click", function () {
    navigateTo("/the-team");
});
