import {createContext} from 'react';
import { QUESTIONS } from '../data';
import {useState, useEffect, useRef} from 'react';

export const AppContext = createContext({
    questions: [],
    answeredQuestions : [],
    totalQuestions: 0,
    totalCorrectQuestions: 0,
    totalSkippedQuestions: 0,
    currentSelectedQuestion: {},
    selectQuestion : () => {},
    selectAnswer : () => {},
});

export default function AppContextProvider({children}){
    const timer = useRef();
    const [questions, setQuestions] = useState(QUESTIONS);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [totalQuestions] = useState(QUESTIONS.length);
    const [totalCorrectQuestions, setTotalCorrectQuestions] = useState(0);
    const [totalSkippedQuestions, setTotalSkippedQuestions] = useState(0);
    const [timerExpired, setTimerExpired] = useState(false);
    const [currentSelectedQuestion, setCurrentSelectedQuestion] = useState(null);

    useEffect(()=>{
        if(timerExpired){
            setTimerExpired(false);
            handleStop();
            setTotalSkippedQuestions(prevSkippedQuestions => (prevSkippedQuestions + 1));
            setAnsweredQuestions((prevAnsweredQuestions)=>{
                return [...prevAnsweredQuestions, {question: currentSelectedQuestion, answer: {text: "You skipped this question.", correct: "skipped"}}];
            });
        }
    }, [timerExpired])

    const selectQuestion = () => {
        const index = Math.floor(Math.random() * questions.length);
  
        setQuestions((prevQuestions)=>
            prevQuestions.filter((question, id) =>{
                if (id !== index){
                    return question;
                }
            }),
        );

        handleStart();

        setCurrentSelectedQuestion(questions[index]);

        return questions[index];
    };

    const selectAnswer = (answer, question) => {
        if(answer.correct === "correct"){
            setTotalCorrectQuestions((prevTotalCorrectQuestions) => prevTotalCorrectQuestions + 1);
        }

        handleStop();

        setAnsweredQuestions((prevAnsweredQuestions)=>{
            return [...prevAnsweredQuestions, {question: question, answer: answer}];
        });
    };

    const handleStart = () => {
        timer.current = setTimeout(()=>{
            setTimerExpired(true);
        }, 3000);
    };

    const handleStop = () => {
        clearTimeout(timer.current);
    };



    const contextValue = {
        questions,
        answeredQuestions,
        totalQuestions,
        totalCorrectQuestions,
        totalSkippedQuestions,
        selectQuestion,
        selectAnswer,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};