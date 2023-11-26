(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', () => {
        const ids = [
            {
                selector: "show-preview-upload",
                toShow: "upload-box"
            },
            {
                selector: "hide-url-checkbox",
                toShow: "redirect-url-wrapper"
            },

        ]
        ids.forEach(
            (id) => {
                const hideUrlCheckbox = document.getElementById(id.selector);
                if (hideUrlCheckbox) {
                    const redirectUrlWrapper = document.getElementById(id.toShow);

                    hideUrlCheckbox.addEventListener('change', function () {
                        if (hideUrlCheckbox.checked) {
                            redirectUrlWrapper.classList.remove('hidden');
                        } else {
                            redirectUrlWrapper.classList.add('hidden');
                        }
                    });
                }
            }
        )

    });
})();
