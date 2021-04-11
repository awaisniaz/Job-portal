import React from 'react'
import './styles.scss'
import Select from 'react-select';
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField';
export default function Step2() {
    const career = [
        { value: 1, label: 'Entry level' },
        { value: 2, label: 'Intermediate' },
        { value: 3, label: 'Professional' }]
    const gender = [
        { value: 1, label: 'Male' },
        { value: 2, label: 'Female' }
    ]
    const dispatch = useDispatch()
    return (
        <div className="step2-container">
            <div className="section1">
                <TextField id="outlined-basic" label="Hourly Rate" variant="outlined" type="number" required={true}
                    onChange={(e) => {
                        dispatch({ type: 'UPDATE-HOURLY', payload: e.target.value })
                    }}
                    InputProps={{ inputProps: { min: 10 } }} />
                <TextField id="outlined-basic" label="Expected Start Date" variant="outlined" type="date" required={true}
                    onChange={(e) => {
                        dispatch({ type: 'UPDATE-STARTING-DATE', payload: e.target.value })
                    }} />
                {/* <Select options={calendar} placeholder="Expected Start Date " /> */}
            </div>
            <div className="section2">
                <Select options={career} placeholder="Career Level "
                    onChange={(item) => {
                        dispatch({ type: 'UPDATE-CAREER-LEVEL', payload: item.label })
                    }}
                />
                <Select options={gender} placeholder="Gender"
                    onChange={(item) => {
                        dispatch({ type: 'UPDATE-GENDER', payload: item.label })
                    }} />
            </div>
            <div className="section3">
                <TextField
                    id="outlined-multiline-static"
                    label="Equipment Specification"
                    multiline
                    placeholder="Write your Description"
                    rows={4}
                    //defaultValue="Default Value"
                    variant="outlined"
                />
            </div>
        </div>
    )
}
