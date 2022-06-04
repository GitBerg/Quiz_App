const quizData = [
    {
        "question": "How old are you?",
        "a": "22",
        "b": "23",
        "c": "24",
        "d": "25",
        "correct": "d"
    },
    {
        "question": "What is your course?",
        "a": "Director",
        "b": "Computer science",
        "c": "Player",
        "d": "Artist",
        "correct": "b"
    },
    {
        "question": "Whats your name?",
        "a": "Gutemberg",
        "b": "Diego",
        "c": "Mike",
        "d": "Melky",
        "correct": "a"
    },
    {
        "question": "What's your last name",
        "a": "Santos",
        "b": "Silva",
        "c": "Filho",
        "d": "Souza",
        "correct": "c"
    },
    {
        "question": "Your favorite language?",
        "a": "Java",
        "b": "Javascript",
        "c": "C",
        "d": "Python",
        "correct": "b"
    }
]

const card = document.querySelector('.card')
const letter_a = document.querySelector('#op1');
const letter_b = document.querySelector('#op2');
const letter_c = document.querySelector('#op3');
const letter_d = document.querySelector('#op4');
const radios = document.getElementsByName('opt')
const question = document.querySelector('.question');
const headCounter = document.querySelector('h3');
const button = document.querySelector('.button');
const options = document.querySelector('.options')

let counter = 0;
let corrects = 0;

const load_question = (counter) => {
    quizData.forEach((element, index) => {
        if (index === counter) {
            headCounter.innerHTML = `${index + 1}/${quizData.length}`
            question.innerHTML = element.question
            letter_a.innerHTML = element.a
            letter_b.innerHTML = element.b
            letter_c.innerHTML = element.c
            letter_d.innerHTML = element.d
        }
    });
}

const isLast = (index) => {
    if (index === quizData.length) {
        return true
    }
}

const cleaner = () => {
    radios.forEach(element => {
        element.checked = false
    })
}

button.addEventListener('click', () => {
    radios.forEach(element => {
        if (element.checked) {
            if (element.value === quizData[counter].correct) {
                corrects++
            }
            counter++
            if(isLast(counter)){
               return card.innerHTML = `<h2>Congratulations!\nYour score in this quiz was ${corrects}/${quizData.length}</h2>`
            }
            cleaner()
            return load_question(counter)
        }
    })
})

load_question(counter)