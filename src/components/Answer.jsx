import {useContext} from 'react';
import {AppContext} from '../store/app-context';

export default function Answer ({answer, question}){
    const {selectAnswer, questionAnswered} = useContext(AppContext);

    const handleAnswerClick = () => {
        selectAnswer(answer, question);
    };

    return (
        <li className="answer"><button onClick={handleAnswerClick}>{answer.text}</button></li>
    );
}