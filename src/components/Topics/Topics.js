import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image'
import './Topics.css'

const Topics = ({ quiz }) => {
    return (





        <div class="card-deck ">
            <div class="card  ">
                <img class="img-fluid topics-image" src={quiz.logo} alt="" />

                <div class="card-body">
                    <h5 class="card-title">{quiz.name}</h5>
                    <p class="card-text">Total Quiz :{quiz.total}</p>
                    <button className='btn btn-primary'>Take Test</button>
                </div>
            </div>


        </div>






















    );
};

export default Topics;