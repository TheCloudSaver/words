function exportAndDownload(json, name) {
    var jsonse = JSON.stringify(json);
    var blob = new Blob([jsonse], {
        type: "application/json"
    });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = name + ".json";

    a.click();
}