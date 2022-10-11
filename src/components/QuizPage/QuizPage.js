import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizPage.css'



const QuizPage = () => {
    const quiz = useLoaderData().data;
    console.log(quiz)
    const { name, questions } = quiz
    const { options, question, correctAnswer } = questions[0];

    return (
        <div className='quiz-page  container'>
            <h2>Quiz of {name} </h2>
            <div className=''>

                {
                    questions.map(opt => <Quiz
                        key={opt.id}
                        opt={opt}></Quiz>)
                }

            </div>



        </div>
    );
};

export default QuizPage;