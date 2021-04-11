import React from 'react'
import { Modal, Button, message } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import Step1 from '../../step-container/step1/index'
import Step2 from '../../step-container/step2/index'
import Step3 from '../../step-container/step3'

export default function Model(props) {
    const dispatch = useDispatch()
    const visible = useSelector(state => state)
    const { stepper, postdata } = visible
    console.log(visible)


    const actionDispatcher = (type) => {
        dispatch({ type: type })
    }

    const header = () => {
        return (<div className="header-main">
            <div className="title">
                <h3 className="main-title">CREATE A JOB POST</h3>
                <p className="sub-heading">Complete the following steps to create an effective job post</p>
            </div>
            <div className="action-btn">
                <Button onClick={() => {
                    dispatch({ type: 'HIDE' })
                    dispatch({ type: 'EXIT' })

                }} ><CloseOutlined /></Button>
            </div>
        </div>)
    }

    const stepperdata = () => {
        if (stepper.visible === 1) {
            return <Step1 />
        }
        else if (stepper.visible === 2) {
            return <Step2 />
        }
        else if (stepper.visible === 3) {
            return <Step3 />
        }
    }

    return (
        <Modal
            className="job-modal"
            visible={true}
            title={header()}
            closable={false}
            footer={[<Button key="Previous" className={`${stepper.visible === 1 ? 'disable' : null}`} onClick={() => {
                actionDispatcher('PREVIOUS_STEP')
            }}>
                Previous
          </Button>,
            <Button key="submit" type="primary" onClick={() => {
                if (stepper.visible === 3) {
                    if (postdata.postype !== null &&
                        postdata.experience !== null &&
                        postdata.hourlyRate !== null) {
                        if (postdata.hourlyRate <= 9) {
                            message.info('Plz add the hourly rate greatar then 9');
                        }
                        else {
                            dispatch({
                                type: 'ADD_POST', payload: visible.postdata
                            })
                        }
                    }
                    else {
                        message.info('Please Complete the befor Post the Data');
                    }
                    dispatch({ type: 'HIDE' })
                    dispatch({ type: 'EXIT' })
                    console.log(visible)
                }
                else {
                    actionDispatcher('NEXT_STEP')
                }

            }}>
                {stepper.visible === 3 ? 'Submit' : 'Next'}
            </Button>]
            }
        >
            <>
                <div className="timeline">
                    <div className="step-counter"><p>Step {stepper.visible} of 3</p></div>
                    <div className="timeline-steps">
                        <div className={`step step1 ${stepper.visible >= 2 ? 'afterFilling' : ''}`}>
                            Job Information
                    </div>
                        <div className={`step  ${stepper.visible === 2 ? 'step2' : 'afterFilling2'}`} >
                            Candidate Type
                    </div>
                        <div className={`step ${stepper.visible >= 3 ? 'afterFilling step3' : ''}`}>
                            Shift Timing
                    </div>
                    </div>
                </div>
                <div>
                    {stepperdata()}
                </div>
            </>
        </Modal >
    )
}
