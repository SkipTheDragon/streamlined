(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', () => {
        const countdownElement = document.getElementById('countdown');
        let countdownValue = 3;
        if (!countdownElement) return;

        const countdownInterval = setInterval(() => {
            countdownValue--;
            countdownElement.textContent = countdownValue.toString();

            if (countdownValue === 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    });
})();
