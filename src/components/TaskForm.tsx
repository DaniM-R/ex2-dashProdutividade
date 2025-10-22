import React, { useState } from 'react'
import { useTasks } from '../contexts/TasksContext'


export const TaskForm: React.FC = () => {
const [text, setText] = useState('')
const { addTask } = useTasks()


function onSubmit(e: React.FormEvent){
e.preventDefault()
if(!text.trim()) return
addTask(text.trim())
setText('')
}


return (
<form onSubmit={onSubmit} style={{display:'flex',gap:8,marginTop:12}}>
<input className='adicionarInput' value={text} onChange={e => setText(e.target.value)} placeholder="Nova tarefa..." />
<button className='adicionar' type="submit">Adicionar</button>
</form>
)
}