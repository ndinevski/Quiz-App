import {useContext} from 'react';
import {AppContext} from '../store/app-context';
import AnswerSummary from './AnswerSummary';

export default function Summary () {
    const {totalQuestions, totalSkippedQuestions, totalCorrectQuestions, answeredQuestions} = useContext(AppContext);

    const answeredCorrectPercentage = Math.round((totalCorrectQuestions / totalQuestions) * 100);
    const skippedPercentage = Math.round((totalSkippedQuestions / totalQuestions) * 100);
    const answeredWrongPercentage = 100 - answeredCorrectPercentage - skippedPercentage;

    return (
        <div id="summary">
            <img src="quiz-complete.png"/>
            <h2>QUIZ COMPLETED!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedPercentage}%</span>
                    <span className="text">SKIPPED</span>
                </p>
                <p>
                    <span className="number">{answeredCorrectPercentage}%</span>
                    <span className="text">ANSWERED CORRECTLY</span>
                </p>
                <p>
                    <span className="number">{answeredWrongPercentage}%</span>
                    <span className="text">ANSWERED INCORRECTLY</span>
                </p>
            </div>
            <ol>
                {answeredQuestions.map((question, index)=>{
                    return <AnswerSummary key={index} question={question} index={index}/>;
                })}
            </ol>
        </div>
    );
};