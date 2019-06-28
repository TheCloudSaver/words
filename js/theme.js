var mode_switch = document.querySelector('.switch');
var root = document.documentElement;

var lightMode = true;
var light = "#ecf0f1";
var dark = "#2c3e50";

var theme_light = "#3498db";
var theme_dark = "#6a89cc";

mode_switch.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMode();
});

function toggleMode() {
    if (lightMode) {
        root.style.setProperty('--primary', dark);
        root.style.setProperty('--secondary', light);
        root.style.setProperty('--theme', theme_dark);

        lightMode = false;
    } else {
        root.style.setProperty('--primary', light);
        root.style.setProperty('--secondary', dark);
        root.style.setProperty('--theme', theme_light);

        lightMode = true;
    }
}