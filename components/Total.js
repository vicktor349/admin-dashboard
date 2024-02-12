import Image from 'next/image'
import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const Total = ({ src, alt, data, stroke, fill, total, totalNumber, profits, backgroundColor, textColor }) =>
{
    return (
        <div className='rounded-xl border shadow-lg px-4 pt-4 xl:w-64 xl:h-64 2xl:w-72 2xl:h-64'>
            <div className='flex items-center'>
                <Image src={src} alt={alt} width={50} height={50} />
                <ResponsiveContainer width="50%" height={50} className="ml-auto">
                    <AreaChart
                        width={10}
                        height={50}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <Area type="monotone" dataKey="pv" stroke={stroke} fill={fill} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-2'>
                <p className='text-lg py-2 text-[#898989]'>{total}</p>
                <p className='font-semibold text-xl py-2'>{totalNumber}</p>
            </div>
            <div>
                <div className='flex items-center mt-10'>
                    <div className={`flex items-center ${backgroundColor} ${textColor} py-1 px-2 rounded-3xl`}>
                        <Image src={"/images/graph.svg"} alt="graph" width={20} height={20} />
                        <span className='text-sm ml-2'>{profits}</span>
                    </div>
                    <span className=' text-[11px] ml-2'>vs. previous month</span>
                </div>
            </div>
        </div>
    )
}

export default Total