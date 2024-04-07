(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', () => {
        const dropzone = document.getElementById('dropzone-file');

        dropzone.addEventListener('change', (e) => {
            let files = e.target.files; // JS FileList object

            // use the 1st file from the list
            let file = files[0];

            let reader = new FileReader(); // built in API

            // Closure to capture the file information.
            reader.onload = () => {
                document.getElementById( 'upload-file-name' ).innerHTML = file.name;
                document.getElementById( 'upload-data' ).classList.remove('hidden');
            };

            // Read the file as text.
            reader.readAsText( file );
        })

        const removeUploadedFile = document.getElementById('upload-remove-file');

        removeUploadedFile.addEventListener('click', () => {
            document.getElementById( 'upload-file-name' ).innerHTML = '';
            document.getElementById( 'upload-data' ).classList.add('hidden');
            dropzone.value = '';
        })
    });
})();
