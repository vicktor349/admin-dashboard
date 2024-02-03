import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const data = [
    {
        name: 'January',
        uv: 4000,
        price: 10000
    },
    {
        name: 'Page B',
        uv: 3000,
        price: 8000
    },
    {
        name: 'Page C',
        uv: 2000,
        price: 6000
    },
    {
        name: 'Page D',
        uv: 2780,
        price: 4000
    },
    {
        name: 'Page E',
        uv: 1890,
        price: 3000
    },
    {
        name: 'Page F',
        uv: 2390,
        price: 2000
    },
    {
        name: 'Page G',
        uv: 3490,
        price: 1000
    },
];
export default function App()
{
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 20,
                left: 50,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" verticalCoordinatesGenerator={(props) => props.width > 600 ? [0, 0] : [0, 0]} />
            <XAxis dataKey="name" />
            <YAxis dataKey="price" />
            <Bar dataKey="uv" >
                {data.map((index) => (
                    <Cell key={`cell-${index}`} fill="#b2e9d6" />
                ))}
            </Bar>
        </BarChart>
    );
}