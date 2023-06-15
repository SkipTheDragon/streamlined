
(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('myForm');
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('overlay');
        const doneButton = document.getElementById('doneButton');

        if (!form) return;

        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const request = await fetch(routeToProcessForm, {
                    method: 'POST',
                    body: formData,
                });
                const response = await request.json()
               document.getElementById('rawResponse').innerHTML = response["raw"];
               document.getElementById('htmlResponse').innerText = response["html"];
               document.getElementById('previewResponse').innerHTML = response["html"];
               document.getElementById('markdownResponse').innerText = response["markdown"];
            } catch (e) {

            }


            modal.classList.remove('hidden');

            setTimeout(() => {
                overlay.classList.remove('hidden');
            }, 250)

            setTimeout(function () {
                modal.classList.add('scale-100');
                modal.classList.add('opacity-100');
            }, 100);
        });

        [overlay, doneButton].forEach((d) => d.addEventListener('click', function () {
            modal.classList.remove('scale-100');
            modal.classList.remove('opacity-100');

            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }));
    });
})();
