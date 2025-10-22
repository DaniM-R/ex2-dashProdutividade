import React from 'react'
import { useTasks } from '../contexts/TasksContext'
import { useWindowSize } from '../hooks/useWindowSize'
import { useUser } from '../contexts/UserContext' 

export const Footer: React.FC = () => {
  const { tasks } = useTasks()
  const { width, height } = useWindowSize()
  const { user } = useUser() 

  return (
    <footer className="footer container" style={{ marginTop: 24 }}>
      {user && <div>Total tarefas: {tasks.length}</div>} 
      <div>Janela: {width} x {height}</div>
    </footer>
  )
}
