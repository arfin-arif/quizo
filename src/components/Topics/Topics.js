import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'

const Topics = ({ quiz }) => {
    const { id } = quiz
    return (





        <div className="card-deck ">
            <div className="card  ">
                <img className="img-fluid topics-image" src={quiz.logo} alt="" />

                <div className="card-body">
                    <h5 className="card-title">{quiz.name}</h5>
                    <p className="card-text">Total Quiz :{quiz.total}</p>
                    <Link to={`/quiz/${id}`}>  <button className='btn btn-primary'>Take Test</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topics;