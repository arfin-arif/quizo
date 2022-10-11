import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const quizes = useLoaderData().data;
    console.log(quizes)
    return (
        <div>
            <h4>Here is the Statistic of Total Marks</h4>


            <div className='d-flex justify-content-center mt-5'>
                {['md'].map((expand) => (
                    <LineChart width={500} height={400} data={quizes} >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                ))}
            </div>
        </div>
    );
};

export default Statistic;