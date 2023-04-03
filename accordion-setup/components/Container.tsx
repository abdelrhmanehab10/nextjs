import Question from "./Question"
import qArr from '../public/static/qArr'


const Container = () => {
  return (
    <div className="bg-white w-[70%] grid grid-cols-3 px-10 py-12 pb-20 rounded">
      <div className="header col-span-1">
         <h1 className="font-medium text-3xl">
            Questions And Answers About Login
         </h1>
      </div>
      <div className="questions col-span-2">
        {qArr.map( q=> 
        <Question key={q.id} question={q.question} answer={q.answer}/>)}
      </div>
    </div>
  )
}

export default Container