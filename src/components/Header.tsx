import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import { useTheme } from '../contexts/ThemeContext'


export const Header: React.FC = () => {
const { user, logout } = useUser()
const { theme, toggleTheme } = useTheme()


return (
<header className="header container">
<div>
<nav className="nav-links" style={{marginLeft:12,display:'inline-block'}}>
<Link to="/dashboard">Tarefas</Link>
<Link to="/about">About</Link>
</nav>
</div>


<div style={{display:'flex',alignItems:'center',gap:12}}>
{user ? <span>Olá, {user.name}</span> : <Link to="/login">Entrar</Link>}
<button onClick={toggleTheme}>{theme === 'light' ? '🌞' : '🌙'}</button>
{user && <button onClick={logout}>Logout</button>}
</div>
</header>
)
}