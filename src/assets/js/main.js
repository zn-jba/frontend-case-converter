function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


let textArea = document.getElementById("text-area");
let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceCaseBtn = document.getElementById("sentence-case");
let saveTextBtn = document.getElementById("save-text-file");


upperCaseBtn.addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});

properCaseBtn.addEventListener("click", function () {
    const words = textArea.value.toLowerCase().split(" ");
    let proper_words = [];
    for (let word of words) {
        proper_words.push(word[0].toUpperCase() + word.slice(1));
    }
    textArea.value = proper_words.join(" ");
});

sentenceCaseBtn.addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
    const lines = textArea.value.toLowerCase().split(". ");
    let sentences = [];
    for (let line of lines) {
        line = line.trimLeft();
        sentences.push(line[0].toUpperCase() + line.slice(1));
    }
    textArea.value = sentences.join(". ");
});

saveTextBtn.addEventListener("click", function () {
    download("text.txt", textArea.value);
});