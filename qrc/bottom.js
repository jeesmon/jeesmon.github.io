const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', event => {
    const file = fileSelector.files[0];
    if (!file) {
        return;
    }

    renderAndScan(file);
});
