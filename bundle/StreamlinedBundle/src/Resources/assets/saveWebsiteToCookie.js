(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', () => {
        const saveCookieForm = document.getElementById('save-cookie-form');
        if (saveCookieForm) {
            saveCookieForm.onsubmit = function (e) {
                e.preventDefault();
                const appInstance = document.getElementById("app-instance");
                document.cookie =  saveCookieForm.dataset["app"] + "=" + appInstance.value+";path=/" + "; max-age=" + 60 * 60 * 24 * 30;
                location.reload();
            }
        }
    });
})();
