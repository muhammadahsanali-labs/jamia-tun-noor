/* Jamia-Tun-Noor - Main Script */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Jamia-Tun-Noor Portal Initialized Safely.");

    // Simple Defensive UI Logic: Smooth Scroll
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default only if it's an internal hash link
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                console.log("Defensive Navigation Triggered");
            }
        });
    });
});