import React from 'react';
import './Charts.css';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart-container'>
            <div className="line-chart">
                <h1 className='line-chart-title'>Sell</h1>
                <LineChart width={600} height={400} data={data}>
                    <Line type={'monotone'} dataKey={'sell'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>
            <div className="bar-chart">
                <h1 className='bar-chart-title'>Investment Vs Revenue</h1>
                <BarChart width={600} height={400} data={data}>
                    <Bar dataKey={'investment'} barSize={30} fill="#8884d8"></Bar>
                    <Bar dataKey={'revenue'} barSize={30} fill="#82ca9d"></Bar>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>
            </div>
        </div>
    );
};

export default Charts;