export const QUESTIONS = [
    {
        question: "Which of the following is not a valid HTML tag?",
        answers: [
            { text: "<nikola>", correct: 'correct'},
            { text: "<head>", correct: 'wrong'},
            { text: "<body>", correct: 'wrong'},
            { text: "<h1>", correct: 'wrong'},
        ]
    },
    {
        question: "What is the correct command to create a new React project?",
        answers: [
            { text: "npm create-react-app myReactApp", correct: 'wrong'},
            { text: "npx create-react-app myReactApp", correct: 'correct'},
            { text: "npm create-react-app", correct: 'wrong'},
            { text: "npx create-react-app", correct: 'wrong'},
        ]
    },
    {
        question: "What is the default local host port that a React development server uses?",
        answers: [
            { text: "5000", correct: 'wrong'},
            { text: "3500", correct: 'wrong'},
            { text: "3000", correct: 'correct'},
            { text: "8080", correct: 'wrong'},
        ]
    },
    {
        question: "To develop and run React code, Node.js is required.",
        answers: [
            { text: "False", correct: 'wrong'},
            { text: "True", correct: 'correct'},
        ]
    },
    {
        question: "Which is a valid Lifecycle phase in ReactJS?",
        answers: [
            { text: "Updating", correct: 'correct'},
            { text: "Uploading", correct: 'wrong'},
            { text: "Downloading", correct: 'wrong'},
            { text: "Rendering", correct: 'wrong'},
        ]
    },
]