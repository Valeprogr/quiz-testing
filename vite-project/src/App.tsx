import { useState } from 'react';
import img from "./quiz.jpeg";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center px-12 md:px-0 justify-center h-screen bg-indigo-950 text-white text-lg'>
      <h1 className='text-pink-500 font-medium text-4xl'>Quiz!</h1>
      <div className='flex h-44 w-44 mt-8 mb-5 rounded-full overflow-hidden'>
      <img className='' src={img} alt='quiz'/>
      </div>
      <p className='mb-4'>Per grandi e piccini</p>
      <div className='mb-4 border-b border-t border-pink-200'>
        <h2 className='text-pink-200 font-semibold uppercase text-xl'>QUIZ CULTURA GENERALE</h2>
      </div>
      <div className='text-center'>
      <p>12 Domande di Cultura Generale con Risposte</p>
      <p>Mettiti alla prova</p>
      </div>

      <div className='mt-8'>
            <button className='h-12 w-32 rounded-lg bg-pink-500 text-white hover:bg-transparent hover:h-14 hover:text-2xl hover:border-2  hover:border-pink-500  font-semibold uppercase'>START</button>  
      </div>
      <p className='mt-4 italic text-xs md:text-sm'>*Clicca sulla risposta corretta</p>
    </div>
  )
}

export default App
