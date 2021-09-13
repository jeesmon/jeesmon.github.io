const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', event => {
    const file = fileSelector.files[0];
    if (!file) {
        return;
    }

    renderAndScan(file, true);
});

var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

if(iOSSafari && document.getElementById("paste")){
    document.getElementById("others").style.display = "none";
    document.getElementById("safari").style.display = "";

    document.getElementById("paste").addEventListener("click", async clickEvent => {
        let items = await navigator.clipboard.read();
        for (let item of items) {
            if (!item.types.includes("image/png")) {
                writeResult("No PNG image pasted")
                continue;
            }

            let reader = new FileReader;
            reader.addEventListener("load", loadEvent => {
                renderAndScan(reader.result, false);
            });

            reader.readAsDataURL(await item.getType("image/png"));
            break;
        }
    });
    // writeResult(ua);
}
