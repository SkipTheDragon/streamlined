(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        const copyCodeButtons = document.querySelectorAll('.copy-code-button');

        copyCodeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const contentId = this.getAttribute('data-content');
                const contentElement = document.getElementById(contentId);
                const codeText = contentElement.innerText;

                if (navigator.clipboard === undefined) {
                    button.innerText = window.trans['copyCode.error'];
                    button.classList.remove('bg-indigo-700', 'hover:bg-green-600');
                    button.classList.add('bg-red-500', 'hover:bg-red-600');
                    button.style.borderColor = '#EF4444';
                    setTimeout(function() {
                        button.innerText = 'Copy Code';
                        button.classList.remove('bg-red-500', 'hover:bg-red-600');
                        button.style.borderColor = '';
                    }, 3000);
                    return;
                }

                navigator.clipboard.writeText(codeText)
                    .then(function() {
                        button.innerText = 'Copied!';
                        button.classList.remove('bg-indigo-700', 'hover:bg-indigo-800');
                        button.classList.add('bg-green-500', 'hover:bg-green-600');
                        button.style.borderColor = '#10B981';
                        setTimeout(function() {
                            button.innerText = 'Copy Code';
                            button.classList.add('bg-indigo-700', 'hover:bg-indigo-800');
                            button.classList.remove('bg-green-500', 'hover:bg-green-600');
                            button.style.borderColor = '';
                        }, 3000);
                    })
                    .catch(function(error) {
                        console.error(window.trans['copyCode.error'], error);
                    });
            });
        });
    });

})();
