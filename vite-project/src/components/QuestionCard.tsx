import React,{useState} from "react";
import { AnswerObject } from "../App";

type Props = {
    question: string;
    answers: string[];
    callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    

    return (
        <div className="text-center ">
            <p className="mb-6">
                Question: {questionNr}/{totalQuestions}
            </p>
            <p className="mb-4 border-b border-t border-pink-200 text-pink-200 font-semibold  uppercase  text-xl" dangerouslySetInnerHTML={{ __html: question }} />
            <div className="my-4 flex flex-col">
                {answers.map((answer) => (
                    <button className={`answers ${answer === userAnswer?.correctAnswer ? "correct" : !answer === userAnswer?.correct ? "incorrect": ""} ` } disabled={userAnswer ? true : false} value={answer} onClick={callback} key={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                        
                ))}
            </div>
            <p className='mt-4 italic text-xs md:text-sm'>*seleziona la risposta corretta e successivamente clicca il bottone 'next' per passare alla prossima domanda.</p>
        </div>
    )
}

export default QuestionCard;