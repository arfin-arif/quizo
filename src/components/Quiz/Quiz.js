import React from 'react';
import './Quiz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';


const Quiz = ({ opt }) => {
    const isRightOrWrong0 = () => toast(` ${opt.correctAnswer === opt.options[0] ? 'Ans is Correct' : 'Ans is Wrong '} `);
    const isRightOrWrong1 = () => toast(` ${opt.correctAnswer === opt.options[1] ? 'Ans is Correct' : 'Ans is Wrong '} `);
    const isRightOrWrong2 = () => toast(` ${opt.correctAnswer === opt.options[2] ? 'Ans is Correct' : 'Ans is Wrong '} `);
    const isRightOrWrong3 = () => toast(` ${opt.correctAnswer === opt.options[3] ? 'Ans is Correct' : 'Ans is Wrong '} `);

    const coorectAns = () => toast(`Correct Ans Is : ${opt.correctAnswer}`);

    return (
        <div className='quizess'>
            <div className="icon">
                <FontAwesomeIcon onClick={coorectAns} icon={faEye}></FontAwesomeIcon>
            </div>
            <h5>{opt.question}</h5>
            <div className='options'>
                <p onClick={isRightOrWrong0}>1 :{opt.options[0]}</p>
                <p onClick={isRightOrWrong1}>2 :{opt.options[1]}</p>
                <p onClick={isRightOrWrong2}>3 :{opt.options[2]}</p>
                <p onClick={isRightOrWrong3}>4 :{opt.options[3]}</p>
                <ToastContainer></ToastContainer>
            </div>





        </div>
    );
};

export default Quiz;