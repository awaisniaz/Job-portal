import React from 'react'
import './styles.scss'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Model from '../common/jobmodel/index'
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
export default function Header() {
    const data = useSelector(state => state)
    const { ModelVisible } = data
    console.log(ModelVisible)
    console.log(data)
    const dispatch = useDispatch()
    return (
        <>
            <div className='header'>
                <div className="title"><h2> Jobs Posted</h2></div>
                <div className="action-container">
                    <Button type="primary" onClick={() => {
                        dispatch({ type: 'VISIBLE' })
                        dispatch({ type: 'CLEAR' })
                    }}><PlusOutlined /> ADD</Button>
                </div>
                {/* {visible && <Model />} */}
            </div>
            {ModelVisible.visible && <Model />}
        </>
    )
}
