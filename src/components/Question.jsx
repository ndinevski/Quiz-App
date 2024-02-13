import {useContext, useState, useEffect} from 'react';
import {AppContext} from '../store/app-context';
import Answer from './Answer';


const shuffle = (array) =>{
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export default function Question () {
    const {selectQuestion, answeredQuestions} = useContext(AppContext);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(selectQuestion());
    }, [answeredQuestions]);

    return (
        <div id="quiz">
            
            <h2>{question ? question.question : "No question found."}</h2>
            <ul id="answers">
                {question ? shuffle(question.answers).map((answer)=>
                    {
                        return <Answer key={answer.text} question={question} answer={answer}/>;
                    })    
                : "No answers found."}
            </ul>
        </div>
    );
}