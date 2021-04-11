
import { Table as Tb, Button, Space, Popconfirm } from 'antd'
import './styles.scss'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
export default function Table() {
    const postData = useSelector((state) => state)
    const { post, postdata } = postData
    const dispatch = useDispatch()
    console.log(postdata)
    const columns = [
        {
            title: 'Job Title',
            dataIndex: 'postype',
            key: 'postype',
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
            key: 'experience',
        },
        {
            title: 'Image',
            dataIndex: 'img',
            key: 'img',
        },
        {
            title: 'Hourly Rate',
            dataIndex: 'hourlyRate',
            key: 'hourlyRate',
        },
        {
            title: 'Office Timing',
            dataIndex: 'timing',
            key: 'timing',
        },
        {
            title: 'User action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <div className="action-container">
                        <Button type="primary" onClick={() => {
                            console.log(record)
                            dispatch({ type: 'VISIBLE' })
                            dispatch({ type: 'CLEAR' })
                        }}><EditOutlined /> { }</Button>
                        <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => {
                                dispatch({ type: 'DELETE_POST', payload: record.id })
                            }}
                            okText="Yes"
                            cancelText="No">
                            <Button type="primary" onClick={() => {
                            }}><DeleteOutlined /></Button>
                        </Popconfirm>
                    </div>
                </Space>
            )
        }

    ];
    return (
        <div className="Table-conatiner">
            <Tb dataSource={post} columns={columns}>
            </Tb>
        </div>
    )
}
