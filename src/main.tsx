import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'
import { TasksProvider } from './contexts/TasksContext'


createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<BrowserRouter>
<ThemeProvider>
<UserProvider>
<TasksProvider>
<App />
</TasksProvider>
</UserProvider>
</ThemeProvider>
</BrowserRouter>
</React.StrictMode>
)