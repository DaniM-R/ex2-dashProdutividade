import React from 'react'
import { useTasks } from '../contexts/TasksContext'


export const TaskList: React.FC = () => {
const { tasks, toggleTask, removeTask } = useTasks()


if(tasks.length === 0) return <p>Nenhuma tarefa por enquanto.</p>


return (
<div className='listTask' style={{marginTop:12}}>
{tasks.map(t => (
<div key={t.id} className={`task ${t.done ? 'done' : ''}`}>
<div>
<input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} />
<span style={{marginLeft:8}}>{t.text}</span>
</div>
<div>
<button onClick={() => removeTask(t.id)}>Excluir</button>
</div>
</div>
))}
</div>
)
}