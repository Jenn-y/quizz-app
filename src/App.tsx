import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuestions} from './API';
import {QuestionsState, Difficulty} from './API';
import {GlobalStyle} from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const startTrivia = async () => {
    setLoading(true);
    setGameover(false);
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent) => {
    if (!gameover){
      const answer = e.currentTarget!.value;
      const correct = questions[number].correct_answer === answer;
      if (correct){
        setScore(prev => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer 
      };
      setAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS){
      gameover(true);
    }
    else {
      setNumber(nextQuestion);
    }
  };

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <h1>REACT QUIZZ</h1>
      {gameover || answers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>Start</button>
      ) : null }
      {!gameover ? <p className="Score">Score: {score}</p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameover && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answer}
          userAnswer={answers ? answers[number] : undefined}
          callback={checkAnswer}
          />
      )}
      {!gameover && 
        !loading && 
        answers.length === number + 1 
        && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>Next Question</button>
      ): null}
    </div>
    </>
  );
}

export default App;
