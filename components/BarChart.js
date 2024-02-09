import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = () =>
{
    const [chartData, setChartData] = useState([700, 400, 150, 350, 800, 500, 470, 320, 280, 650]);
    const [currentDay, setCurrentDay] = useState(getCurrentDay());

    useEffect(() =>
    {
        const updateData = () =>
        {
            const newDay = getCurrentDay();
            if (newDay !== currentDay)
            {
                setCurrentDay(newDay);
                const newData = [...chartData];
                const newSales = Math.floor(Math.random() * 1000);
                newData.push(newSales);
                setChartData(newData.slice(-10));
            }
        };

        const chartContext = document.getElementById('myChart').getContext('2d');
        const existingChart = Chart.getChart(chartContext);
        if (existingChart)
        {
            existingChart.destroy();
        }

        const newChart = new Chart(chartContext, {
            type: 'bar',
            data: {
                labels: Array.from({ length: 10 }, (_, i) =>
                {
                    const date = new Date();
                    date.setDate(date.getDate() - (9 - i));
                    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                }),
                datasets: [
                    {
                        data: chartData,
                        borderColor: "#34caa5",
                        backgroundColor: "#34caa5",
                        borderRadius: 30,
                        barPercentage: 0.5,
                    },
                ]
            },
            options: {
                layout: {
                    padding: {
                        top: 20,
                        bottom: 20,
                        left: 10,
                        right: 10
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    title: {
                        display: true,
                        text: "Sales Trend",
                        align: "start",
                        padding: {
                            top: 20,
                            bottom: 30,
                        },
                        font: {
                            size: 19,
                        },
                        color: "black"
                    },
                },
                scales: {
                    x: {
                        type: "category",
                        grid: {
                            display: false
                        },
                    },
                    y: {
                        type: "linear",
                        suggestedMax: 1200,
                        suggestedMin: 0,
                        ticks: {
                            stepSize: 300,
                            callback: function (value)
                            {
                                return '$' + value;
                            }
                        },
                    }
                }
            }
        });

        return () =>
        {
            newChart.destroy();
        };
    }, [chartData, currentDay]);

    function getCurrentDay()
    {
        const today = new Date();
        return today.toISOString().split('T')[0];
    }

    return (
        <div className='border border-borderColor pt-0 rounded-xl shadow-xl h-[55vh] w-[55vw]'>
            <canvas id='myChart'></canvas>
        </div>
    );
}

export default BarChart;
