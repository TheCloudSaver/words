var lang_primary = document.querySelector('#lang_1');
var lang_secondary = document.querySelector('#lang_2');
var listname = document.querySelector('#listname');

var list_primary_label = document.querySelector('#label_primary');
var list_secondary_label = document.querySelector('#label_secondary');

var primary_words = document.querySelector('.primary-words');
var secondary_words = document.querySelector('.secondary-words');

var download_button = document.querySelector('.download-button');
var extrarow_button = document.querySelector('.addrows-button');

var exportJSON;
var tabindex = 6;

// lang_primary.addEventListener("input", function (event) {
//     event.preventDefault();
//     list_primary_label.innerHTML = lang_primary.value;
// });

// lang_secondary.addEventListener("input", function (event) {
//     event.preventDefault();
//     list_secondary_label.innerHTML = lang_secondary.value;
// });

download_button.addEventListener("click", function (event) {
    event.preventDefault();
    save();
});

extrarow_button.addEventListener("click", function (event) {
    event.preventDefault();
    addRows();
});

function save() {
    var primaryChildNodes = primary_words.childNodes;
    var secondaryChildNodes = secondary_words.childNodes;

    var wordlist = [];

    for (var i = 1; i < primaryChildNodes.length; i += 2) {
        if (primaryChildNodes[i] && primaryChildNodes[i].value) {
             wordlist.push({
                 question: primaryChildNodes[i].value,
                 answer: secondaryChildNodes[i].value
             }, );
        } else {
           console.log("Iteration ended.");
        }
    }

    exportJSON = {
        "name": listname.value,
        "languages": [lang_primary.value, lang_secondary.value],
        "words": wordlist
    };

    exportAndDownload(exportJSON, listname.value);
}

function addRows() {
    for (var i = 0; i < 5; i++) {
        var node = document.createElement("INPUT");
        node.setAttribute("class", "button list_1 response");
        node.setAttribute("id", "list_1");
        node.setAttribute("type", "text");
        node.setAttribute("placeholder", "");
        node.setAttribute("tabindex", tabindex);

        tabindex += 1;
        primary_words.appendChild(node);
    }

    tabindex -= 5;

    for (var i = 0; i < 5; i++) {
        var node = document.createElement("INPUT");
        node.setAttribute("class", "button list_2 response");
        node.setAttribute("id", "list_2");
        node.setAttribute("type", "text");
        node.setAttribute("placeholder", "");
        node.setAttribute("tabindex", tabindex);

        tabindex += 1;
        secondary_words.appendChild(node);
    }
}