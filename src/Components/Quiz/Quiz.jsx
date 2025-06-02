import React from 'react'
import { useState } from 'react'
import './Quiz.css'
import { useLocation, useNavigate} from 'react-router-dom'
import topics from '../Assets/topic.js'

const Quiz = () => {
    const location = new useLocation();
    const navigate = new useNavigate();
    const {props} = location.state;
    const [currentIndex,setCurrentIndex] = useState(0);
    const [showScore,setShowScore]=useState(false);
    const [score,setScore]=useState(0);
    const topicQuestions = topics.find((topic)=>props.name===topic.name)?.questions || [];
    const currentQuestion = topicQuestions[currentIndex];

    const handleAnswer = (option)=>{
      if(option===currentQuestion.answer){
        setScore(score+1);
      }
      const nextIndex = currentIndex+1;
      if(nextIndex<topicQuestions.length){
        setCurrentIndex(nextIndex);
      } else{
        setShowScore(true);
      }
    };

    const goBack = ()=>{
      navigate('/popular');
    }

  return (
    <div className='quiz-questions'>
      {showScore?(
        <div className="submitPage">
          <h2>{props.name}</h2>
          <br/>
          <h3 className='score' >Your Score: {score} / {topicQuestions.length}</h3>
          <button onClick={goBack}>Go Back</button>
        </div>):(
          <>
          <h2>{props.name} Quiz</h2>
          <br/>
          <div className="qandA">
            <p className="question">
              Q{currentIndex+1}: {currentQuestion.question}
              <br/>
            </p>
            <br />
            {currentQuestion.options.map((option,idx)=>(
              <button className='optionBtn' key={idx} onClick={()=>handleAnswer(option)}>{option}</button>
            ))}
            <div className="buttons">
              <button onClick={()=>{
                if(currentIndex>0){
                  setCurrentIndex(currentIndex-1);
                }
              }}
              disabled={currentIndex==0}>Previous</button>

              <button onClick={()=>{
                if(currentIndex<topicQuestions.length-1){
                  setCurrentIndex(currentIndex+1);
                }else{
                  setShowScore(true);
                }
              }}>Next</button>
            </div>
          </div>
          </>
        
      )}
    </div>
  );
};

export default Quiz
