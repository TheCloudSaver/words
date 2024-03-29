var mode_switch = document.querySelector('.switch');
var root = document.documentElement;

var lightMode = false;
var light = "#ecf0f1";
var dark = "#2c3e50";

var theme = "#3498db";

mode_switch.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMode();
});

function toggleMode() {
    if (lightMode) {
        root.style.setProperty('--primary', dark);
        root.style.setProperty('--secondary', light);

        lightMode = false;
    } else {
        root.style.setProperty('--primary', light);
        root.style.setProperty('--secondary', dark);

        lightMode = true;
    }
}