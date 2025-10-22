import React from 'react'
import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'


export const Dashboard: React.FC = () => {
return (
<div className="dash-box container">
<h2 className='dash'>Minhas tarefas</h2>
<TaskForm />
<TaskList />
</div>
)
}