import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuestions} from './API';
import {QuestionsState, Difficulty} from './API';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const startTrivia = async () => {

  };

  const checkAnswer = (e: MouseEvent) => {

  };

  const nextQuestion = () => {

  };

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  return (<
    div className="App">
      <h1>REACT QUIZZ</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="Score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={answers ? answers[number] : undefined}
        callback={checkAnswer}
        />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
