export default function AnswerSummary({question, index}){
    return (
        <li>
            <h3>{index + 1}</h3>
            <p className="question">{question.question.question}</p>
            <p className={"user-answer " + question.answer.correct}>{question.answer.text}</p>
        </li>
    );
};