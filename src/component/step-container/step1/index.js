import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';
import './styles.scss'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import TextField from '@material-ui/core/TextField';
export default function Step1() {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const experience = [
        { value: 1, label: '2 year' },
        { value: 2, label: '3 year' },
        { value: 3, label: '4 year' }]
    const post = [
        { value: 1, label: 'Software Engineer' },
        { value: 2, label: 'ML Engineer' },
        { value: 3, label: 'DevOps' }
    ]
    const education = [
        { value: 1, label: 'BS(CS)' },
        { value: 2, label: 'BS(IT)' },
        { value: 3, label: 'BS(SE)' }
    ]
    const skill = [
        { value: 1, label: 'Java' },
        { value: 2, label: 'Python' },
        { value: 3, label: 'Reactjs' }
    ]
    return (
        <div className="step-container">
            <div className="section1">
                <Select options={post} placeholder="Enter Post " onChange={(item) => {
                    dispatch({ type: 'UPDATE-POST', payload: item.label })
                }}
                    required={true} />
                <Select options={experience} placeholder="Enter Experience " onChange={(item) => {
                    dispatch({ type: 'UPDATE-EXPERIENCE', payload: item.label })
                }}
                    required={true} />
            </div>
            <div className="section2">
                <Select options={education} placeholder="Enter Education" onChange={(item) => {
                    dispatch({ type: 'UPDATE-EDUCATION', payload: item.label })

                }}
                    required={true} />
            </div>
            <div className="section3">
                <Select options={skill} placeholder="Enter Skills" onChange={(item) => {
                    dispatch({ type: 'UPDATE-SKILL', payload: item.label })
                }}
                    required={true} />
            </div>
            <div className="section4">
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    placeholder="Write your Description"
                    rows={4}
                    variant="outlined"
                    onChange={(e) => {
                        dispatch({ type: 'UPDATE-DESCRIPTION', payload: e.target.label })
                    }}
                    required={true}
                />
            </div>
            <div className="section4">
                <p>Add if there is any inspiration</p>
                <Button><UploadOutlined /> GO TO SELECT TEMPLETE</Button>
            </div>

        </div>
    )
}
