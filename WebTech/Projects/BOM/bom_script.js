// Browser Information (navigator object)
const browserInfo = document.getElementById('browser-info');
browserInfo.textContent = `Browser: ${navigator.userAgent}, Language: ${navigator.language}`;

// Screen Information (screen object)
const screenInfo = document.getElementById('screen-info');
screenInfo.textContent = `Screen resolution: ${screen.width}x${screen.height}, Color depth: ${screen.colorDepth} bits`;

// Location Information (location object)
const currentUrl = document.getElementById('current-url');
currentUrl.textContent = `Current URL: ${location.href}`;

// History Navigation (history object)
function reloadPage() {
    location.reload(); // Reload the current page
}

function navigateBack() {
    history.back(); // Go to the previous page
}

function navigateForward() {
    history.forward(); // Go to the next page
}

// Window alert example
window.onload = function() {
    alert('Welcome to the BOM Demo!');
};
