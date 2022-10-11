import React from 'react';
import './Quiz.css'
const Quiz = ({ opt }) => {

    return (
        <div className='quizess'>

            <h5>{opt.question}</h5>
            <div className='options'>
                <p>1 :{opt.options[0]}</p>
                <p>2 :{opt.options[1]}</p>
                <p>3 :{opt.options[2]}</p>
                <p>4 :{opt.options[3]}</p>
            </div>





        </div>
    );
};

export default Quiz;