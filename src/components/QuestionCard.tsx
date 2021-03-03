import React from 'react';
import { FunctionComponent } from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
}
const QuestionCard: FunctionComponent<Props> = () => (
  <div>
    <p className="number">Question:</p>
    
  </div>
);

export default QuestionCard;