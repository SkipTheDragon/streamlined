(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', () => {

        const cookieBox = document.querySelector(".wrapper"),
            buttons = document.querySelectorAll(".button");

        //if cookie contains codinglab it will be returned and below of this code will not run
        if (document.cookie.includes("consent")) return;
        cookieBox.classList.add("show");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                cookieBox.classList.remove("show");

                //if button has acceptBtn id
                if (button.id === "acceptBtn") {
                    //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                    document.cookie = "cookieBy= consent; max-age=" + 60 * 60 * 24 * 30;
                } else {
                    window.history.go(-1)
                }
            });
        });
    });
})();
