import React, {useState, useCallback} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

type Props = {
  question : string;
  answer : string;
}

const Question = ({question, answer}: Props) => {
  const [ showAnswer, setShowAnswer] = useState(false)

  const toggle = useCallback(() => {
    setShowAnswer(prev => !prev)
  },[])
  return (
    <div className='px-5'>
      <div className='toggle flex justify-between mt-11'>
        <h2 className='font-bold tracking-wider'>{question}</h2>
        {showAnswer ? (
          <span className='bg-[#e8fccd7d] p-2 rounded-full cursor-pointer'>
            <AiOutlineMinus color='red' onClick={toggle}/>
          </span>) 
        : (
          <span className='bg-[#e8fccd7d] p-2 rounded-full cursor-pointer'>
            <AiOutlinePlus color='red' onClick={toggle}/>
          </span>)}
      </div>
      {showAnswer && <p>{answer}</p>}
    </div>
  )
}

export default Question