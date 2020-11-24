window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.getElementById("B-home").addEventListener("click", clickedHome);
    document.getElementById("B-info").addEventListener("click", clickedInfo);
    document.getElementById("B-facts").addEventListener("click", clickedFacts);
    document.getElementById("B-quiz").addEventListener("click", clickedQuiz);
    document.getElementById("B-contact").addEventListener("click", clickedContact);
}

function clickedHome() {
    hide();
    document.getElementById("home").classList.remove("hidden");
}

function clickedInfo() {
    hide();
    document.getElementById("info").classList.remove("hidden");    
}

function clickedFacts() {
    hide();
    document.getElementById("facts").classList.remove("hidden");
}

function clickedQuiz() {
    hide();
    document.getElementById("quiz").classList.remove("hidden");
}

function clickedContact() {
    hide();
    document.getElementById("contact").classList.remove("hidden");
}

function hide() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("info").classList.add("hidden");
    document.getElementById("facts").classList.add("hidden");
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");
}