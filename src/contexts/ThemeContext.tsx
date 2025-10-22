import React, { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'


interface ThemeContextType {
theme: 'light' | 'dark'
toggleTheme: () => void
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export const ThemeProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('app:theme', 'light')


useEffect(() => {
document.body.classList.toggle('dark', theme === 'dark')
}, [theme])


const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')


return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
)
}


export function useTheme(){
const ctx = useContext(ThemeContext)
if(!ctx) throw new Error('useTheme must be used within ThemeProvider')
return ctx
}