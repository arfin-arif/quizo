import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistic.css'
const Statistic = () => {
    const quizes = useLoaderData().data;

    return (
        <div>
            <h4>Here is the Statistic of Total Marks</h4>


            <div className='d-flex justify-content-center mt-5 chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={400} data={quizes} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>

                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <p className='mt-3'>Fig: SimpleLineChart</p>
        </div>
    );
};

export default Statistic;