//
//    The Dark Mode System - DISABLED
//

// Force light mode permanently
function disableDarkMode() {
	document.body.classList.remove('dark-mode');
	localStorage.setItem('theme', 'light');
}

// Always apply light mode on page load
disableDarkMode();

// Disable the toggle button (optional - prevents errors if button exists)
const toggleButton = document.getElementById('dark-mode-toggle');
if (toggleButton) {
	toggleButton.style.display = 'none'; // Hide the button
	toggleButton.disabled = true; // Disable it
}
