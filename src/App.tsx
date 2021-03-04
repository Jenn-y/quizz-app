import React from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivia = async () => {

  };

  const checkAnswer = (e: MouseEvent) => {

  };

  const nextQuestion = () => {

  };

  return (<
    div className="App">
      <h1>REACT QUIZZ</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="Score">Score:</p>
      <p>Loading Questions ...</p>
      
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
