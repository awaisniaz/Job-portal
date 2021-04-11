import React, { useState } from 'react'
import './styles.scss'
import { Button } from 'antd'
export default function Step3() {
    const [week, setWeek] = useState([{
        key: 1,
        title: 'S',
        day: 'Sunday',
        timing: '9:00 am to 5:00 pm',
        on: false
    },
    {
        key: 2,
        title: 'M',
        day: 'Monday',
        timing: '9:00 am to 5:00 pm',
        on: false
    }, {
        key: 3,
        title: 'T',
        day: 'Tuesday',
        timing: '9:00 am to 5:00 pm',
        on: false

    },
    {
        key: 4,
        title: 'W',
        day: 'Wednesday',
        timing: '9:00 am to 5:00 pm',
        on: false
    }, {
        key: 5,
        title: 'T',
        day: 'Thursday',
        timing: '9:00 am to 5:00 pm',
        on: true
    },
    {
        key: 6,
        title: 'F',
        day: 'Friday',
        timing: '9:00 am to 5:00 pm',
        on: true
    },
    {
        key: 7,
        title: 'S',
        day: 'Saturday',
        timing: '9:00 am to 5:00 pm',
        on: false
    },])
    const timeUpdate = (id) => {
        const updated = week.map(item => (
            item.key === id ? item.on ? { ...item, on: false } : { ...item, on: true } : item
        ))
        setWeek([...updated])

    }
    return (
        <div className="main-container">
            <div className="Title-container">
                <h1>Schedule working days & timings</h1>
            </div>
            <div className="days-btn">
                {week.map(item => {
                    return <Button onClick={() => {
                        timeUpdate(item.key)
                    }} className={item.on === true ? 'active' : null} key={item.key}>{item.title}</Button>
                })}
            </div>
            <div className="expendable-week-btn">
                {week.map(item => {
                    return <div className="Week-name">
                        <div className={`Name ${item.on ? 'active' : ''}`}>{item.day}</div>
                        <div className="timing">{item.timing}</div>
                    </div>
                })
                }
            </div>

        </div>
    )
}
