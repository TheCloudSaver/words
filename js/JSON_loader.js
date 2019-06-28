(function () {
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event) {
        var data = JSON.parse(event.target.result);
        console.log('File ' + data.name + ' is loaded!');

        name = data.name;
        language = data.languages;
        list = data.words;
        start();
    }

    file.addEventListener('change', onChange);
}());