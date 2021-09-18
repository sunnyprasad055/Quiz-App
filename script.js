const quizQuestion = [
    {
        question: "what is the height of Eiffel tower",
        a: "324 m to tip",
        b: "224 m to tip",
        c: "334 m to tip",
        d: "114 m to tip",
        correct: "a",
    },
    {
        question: "what is the capital of Rajasthan",
        a: "Udaipur",
        b: "Jaisalmer",
        c: "Bundi",
        d: "Jaipur",
        correct: "d",
    },
    {
        question: "What is the nickname of Visakhapatnam?",
        a: "City of Destiny",
        b: "City of Dreams",
        c: "City of Inspiration",
        d: "city of Beach",
        correct: "a",
    },
    {
        question: "what is the most used Programming language 2021",
        a: "Javascript",
        b: "Python",
        c: "C#",
        d: "HTML",
        correct: "b",
    },
    {
        question: "what is the most popular Programming code Editor 2021",
        a: "Brackets",
        b: "NotePad",
        c: "Sublime text",
        d: "VS code",
        correct: "d",
    },
    {
        question: "who is the President of india",
        a: "Narendra Modi",
        b: "YS Jagan Mohan Reddy",
        c: "Ram Nath Kovind",
        d: "Manmohan Singh",
        correct: "c",
    },
    {
        question: "when did India gain its independence",
        a: "August 15th 1947",
        b: "sept 15th 1952",
        c: "jan 26th 1347",
        d: "Dec 29th 1998",
        correct: "a",
    },
];
const queEl = document.getElementById('que');

const a_label = document.getElementById('a_label');
const b_label = document.getElementById('b_label');
const c_label = document.getElementById('c_label');
const d_label = document.getElementById('d_label');

let presentQue = 0;

runQuiz();

function runQuiz() {
    const presentQuiz = quizQuestion[presentQue];
    queEl.innerText = presentQuiz.question;
    a_label.innerText = presentQuiz.a;
    b_label.innerText = presentQuiz.b;
    c_label.innerText = presentQuiz.c;
    d_label.innerText = presentQuiz.d;

    presentQue++;
}
