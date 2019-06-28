var question = document.querySelector('.word');
var progress = document.querySelector('.progress');

var input = document.querySelector('.input');
var file = document.querySelector('.file-input');
var response = document.querySelector('.response');
var submit = document.querySelector('.submit');
var mistake = document.querySelector('.mistake');

var upload = document.querySelector('.upload');
var submit_visible = document.querySelector('.submit-button');
var mistakes_button = document.querySelector('.mistake-button');
var mistakes_list = document.querySelector('.mistake-list');

var form = document.querySelector('.form');
var hero = document.querySelector('.hero');

var i = 0;
var count = 1;

var name;
var list;
var language;

var score = 0;
var mistakes = [];

submit.addEventListener("click", function (event) {
    event.preventDefault();
    checkAnswer(list[i].answer);
});

mistake.addEventListener("click", function (event) {
    event.preventDefault();
    displayMistakes();
});

response.style.display = 'none';
submit_visible.style.display = 'none';
mistakes_button.style.display = 'none';
mistakes_list.style.display = 'none';

question.innerHTML = 'Input a file containing the test';
progress.style.display = 'none';

function start() {
    hero.innerHTML = 'Words - ' + name;
    window.document.title = name + ' - Words 📚';

    response.style.display = 'block';
    submit_visible.style.display = 'block';
    progress.style.display = 'block';

    input.style.display = 'none';
    askQuestion();
}

function askQuestion() {
    reset();

    question.innerHTML = list[i].question;
    progress.innerHTML = count + '/' + list.length;
}

function checkAnswer(answer) {
    if (response.value == answer) {
        console.log("Correct answer was given.");
        score++;

        response.readonly = true;
        submit_visible.readonly = true;
        response.style.border = "2px solid #2ecc71";
    } else {
        console.log("Incorrect answer was given. Correct answer was " + answer);
        response.style.border = "2px solid #e74c3c";
        mistakes.push(i);
    }

    response.style.transition = ".2s";
    update();

    if (i < list.length) {
        setTimeout(askQuestion, 1000);
    } else {
        setTimeout(endTest, 1000);
    }
}

function reset() {
    response.style.border = "1px solid #ccc";
    form.reset();

    response.placeholder = language[0] + ' - ' + language[1];
    response.readonly = false;
    submit_visible.readonly = false;
}

function update() {
    i++;
    count++;
}

function endTest() {
    reset();

    response.style.display = 'none';
    submit_visible.style.display = 'none';
    mistakes_button.style.display = 'block';

    question.innerHTML = 'You got ' + score + ' right.';
    progress.innerHTML = 'That is equal to ' + (score / list.length) * 100 + '%';
}

function displayMistakes() {
    mistakes_list.style.display = 'block';

    for (var j = 0; j < mistakes.length; j++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(list[mistakes[j]].question + ' = ' + list[mistakes[j]].answer);
        node.appendChild(textnode);
        mistakes_list.appendChild(node);
    }

    mistakes_button.style.display = 'none';
}