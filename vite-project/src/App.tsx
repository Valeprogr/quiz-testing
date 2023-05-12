import { useState } from 'react';
import img from "./quiz.jpeg";
import QuestionCard from './components/QuestionCard';
import data from "./data/data.json";


export type Question = {
  question: string;
  correct_answer: string;
  answers: string[];
}
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 12;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);



  // console.log(questions.results)

  const startGame = () => {
    setLoading(true);
    setGameOver(false);
    setQuestions(data.results);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e:any) => { 
    if (!gameOver) {
      //User Answer
      const answer = e.currentTarget.value;
      console.log(answer)
      //Check answer with correctAnswer
      const correct = questions[number].correct_answer === answer;
      //If answer is correct add score
      if (correct) {
        setScore((prev) => prev + 1);
      }

      console.log(score)
      //Save answer in  the array for user answer

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
        
      };
      

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  
  const nextQuestion = () => {
    //Next Question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };



  return (
    <div className='flex flex-col justify-between items-center  min-h-screen  px-12 w-auto  bg-indigo-950 text-white text-lg'>
      <div className='flex flex-col items-center pt-4 md:pt-32 '>
        {gameOver ?
          <>
        <h1 className='text-pink-500 font-medium text-5xl pt-4'>Q: uiz!</h1>
        <div className='flex h-32 w-32 mt-8 mb-5 rounded-full overflow-hidden'>
        <img className='' src={img} alt='quiz' />
        </div>
        <p className='mb-4'>Quiz a risposta multipla di</p>
        <div className='mb-4 border-b border-t border-pink-200'>
        <h2 className='text-pink-200 font-semibold uppercase text-xl'>CULTURA GENERALE</h2>
        </div>
        <div className='mt-2 text-center'>
              <p>Metti alla prova la tue conoscenze, seleziona la risposta e clicca sul tasto next per passare alla prossima domanda.
              Ad ogni risposta corretta verra assegnato un punto.
              </p>
              
        </div>
          </>
          :
          <>
            {!gameOver ?
              <div className='flex mb-3 pt-10'>
                <div className='text-4xl pr-2'><p>Scoring:</p></div>
                <div className='text-4xl text-pink-500'><p>{score}</p></div>
               
                
              </div>
              : null}
      {loading? <p>Loading Questions...</p>: null}
      {!loading && !gameOver &&(
        <>
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        </>
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
        (<button className='btn mt-4' onClick={nextQuestion}>Next</button>)
        :
        null}
          </>
          }
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          <>
          <div className='mt-8'>
            <button className='btn' onClick={startGame}>START</button>
          </div>
        </>
        :
        null
        }
        <div className='mt-6 pb-8 md:pb-2'>
        <p className='text-sm'>copyright Valentina Vittoria 2023  &copy;</p>
        </div>
        </div>
    </div>
  )
}

export default App
