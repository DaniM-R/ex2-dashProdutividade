import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { User } from '../types'
import { useNavigate } from 'react-router-dom'


interface UserContextType {
user: User | null
login: (name: string, email: string) => void
logout: () => void
}


const UserContext = createContext<UserContextType | undefined>(undefined)


export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
const [user, setUser] = useLocalStorage<User | null>('app:user', null)
const navigate = useNavigate()


const login = (name: string, email: string) => {
const u = { name, email }
setUser(u)
navigate('/dashboard')
}
const logout = () => {
setUser(null)
navigate('/login')
}


return (
<UserContext.Provider value={{ user, login, logout }}>
{children}
</UserContext.Provider>
)
}


export function useUser(){
const ctx = useContext(UserContext)
if(!ctx) throw new Error('useUser must be used within UserProvider')
return ctx
}