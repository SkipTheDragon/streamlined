(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', () => {
        // Check if dark mode is enabled or not
        const isDarkMode = () => document.body.classList.contains('dark');

        // Toggle dark mode
        const toggleDarkMode = () => {
            document.body.classList.toggle('dark');

            // Set a cookie to remember the user's preference
            document.cookie = `darkMode=${isDarkMode() ? '1' : '0'}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        };

        // Check if dark mode preference exists in the cookie
        const checkDarkModePreference = () => {
            const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)darkMode\s*=\s*([^;]*).*$)|^.*$/, '$1');
            if (cookieValue === '1') {
                document.body.classList.add('dark');
            }
        };

        // Add click event listener to the dark mode toggle button
        const darkModeToggleBtn = document.getElementById('darkModeToggle');
        if (darkModeToggleBtn) {
            darkModeToggleBtn.addEventListener('click', toggleDarkMode);

            // On page load, check the dark mode preference
            checkDarkModePreference();
        }
    });
})();
