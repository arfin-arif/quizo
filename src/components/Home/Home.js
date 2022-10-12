import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const quizesObj = useLoaderData();
    const quizes = quizesObj.data;


    return (
        <div className='home-container container'>
            <div className='header'>
                <div className="header-content d-flex justify-content-between align-items-center">
                    <img className='img-fluid ' src="https://templates.seekviral.com/rifmanew/forms/Questionnaire%20Multistep%20Quiz/assets/images/side-img.png" alt="" />
                    <h3 className='me-5 header-title text-secondary'>Start Practicing Programming
                        <br />Quiz Everyday With <span className='text-info'> QUIZO</span></h3>
                </div>
            </div>
            <div className="topics-container  ">
                {quizes.map(quiz => <Topics
                    key={quiz.id}
                    quiz={quiz}
                ></Topics>)}
            </div>
        </div>
    );
};

export default Home;