import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todoRemainingSelector } from '../../redux/selector';
import todoSlice from './todoSlice';
export default function TodoList() {
    // State variables
    const [todoName, setTodoName] = useState('')
    const [prioriry, setPriority] = useState('Medium')

    // Get values from state
    const todoList = useSelector(todoRemainingSelector)
    console.log(todoList);


    const dispatch = useDispatch()

    const handleAddButtonCLick = () => {
        // Dispatch
        dispatch(todoSlice.actions.addTodo({
            id: uuidv4(),
            name: todoName,
            priority: prioriry,
            completed: false,
        }));
        setTodoName('')
        setPriority('Medium')
    }

    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }
    const handlePriorityChange = (value) => {
        setPriority(value)
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />)}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" value={prioriry} onChange={handlePriorityChange} >
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonCLick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}