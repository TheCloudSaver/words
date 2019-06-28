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

        shuffle(list);
        start();
    }

    file.addEventListener('change', onChange);
}());

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}