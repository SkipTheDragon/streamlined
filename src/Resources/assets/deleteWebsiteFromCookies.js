(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', () => {
        const  elements = document.querySelectorAll('#delete-app-from-cookies');
        elements.forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                document.cookie =  element.dataset["app"] + "=;path=/" + "; max-age=" + 0;
                location.reload();
            });
        });
    });
})();
