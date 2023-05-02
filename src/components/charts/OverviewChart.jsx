import React from 'react'
import { BarChart, Bar, Label, ResponsiveContainer, XAxis, YAxis, padding } from 'recharts'

export default function OverviewChart() {

    const data = [
        { date: 'month', users: 100 },
        { date: 'month', users: 120 },
        { date: 'month', users: 140 },
        { date: 'month', users: 160 },
        { date: 'month', users: 180 },
        { date: 'month', users: 200 },
        { date: 'month', users: 220 },
        { date: 'month', users: 100 },
        { date: 'month', users: 120 },
        { date: 'month', users: 140 },
        { date: 'month', users: 160 },
        { date: 'month', users: 180 },
        { date: 'month', users: 200 },
        { date: 'month', users: 220 },
    ];

    return (
        <div className='flex justify-start w-full h-full'>

            <ResponsiveContainer height="100%" width="100%">
                <BarChart
                    data={data}>
                    <XAxis dataKey="date"></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="users" fill='#A855F7' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
