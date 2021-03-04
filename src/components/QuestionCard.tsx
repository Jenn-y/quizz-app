import React from 'react';
import { FunctionComponent } from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer
}: Props) => (
  <>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
    </div>
  </>
);

export default QuestionCard;