import React from 'react';
import { FunctionComponent } from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers = [],
  callback,
  questionNum,
  totalQuestions,
  userAnswer
}: Props) => (
  <>
    <p className="number">Question: {questionNum}/{totalQuestions}</p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {
        answers.map(answer => {
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
          </div>
        })
      }
    </div>
  </>
);

export default QuestionCard;