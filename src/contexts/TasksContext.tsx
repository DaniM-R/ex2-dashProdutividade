import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { Task } from '../types'
import { v4 as uuid } from 'uuid'


interface TasksContextType {
tasks: Task[]
addTask: (text:string) => void
toggleTask: (id:string) => void
removeTask: (id:string) => void
}


const TasksContext = createContext<TasksContextType | undefined>(undefined)


export const TasksProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
const [tasks, setTasks] = useLocalStorage<Task[]>('app:tasks', [])


function addTask(text: string){
const t: Task = { id: uuid(), text, done: false }
setTasks(prev => [t, ...prev])
}


function toggleTask(id:string){
setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t))
}


function removeTask(id:string){
setTasks(prev => prev.filter(t => t.id !== id))
}


return (
<TasksContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
{children}
</TasksContext.Provider>
)
}


export function useTasks(){
const ctx = useContext(TasksContext)
if(!ctx) throw new Error('useTasks must be used within TasksProvider')
return ctx
}