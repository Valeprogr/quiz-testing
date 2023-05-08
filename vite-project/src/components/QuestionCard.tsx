import React from "react";
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
    totalQuestions
}) => {
    return (
        <div className="text-center">
            <p>
                Question: {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div className="my-4 flex flex-col">
                {answers.map((answer) => (
                        <button className="cursor-pointer p-2 border-2 border-white rounded-md my-2" disabled={userAnswer ? true : false} value={answer} onClick={callback} key={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                        
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;