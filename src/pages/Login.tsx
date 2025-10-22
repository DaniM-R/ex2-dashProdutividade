import React, { useState } from 'react'
import { useUser } from '../contexts/UserContext'


export const Login: React.FC = () => {
const { login } = useUser()
const [name, setName] = useState('')
const [email, setEmail] = useState('')


function onSubmit(e: React.FormEvent){
e.preventDefault()
if(!name.trim() || !email.trim()) return
login(name.trim(), email.trim())
}


return (
<div className="login-box container">
<h2 className='login'>Login</h2>
<form onSubmit={onSubmit} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:400}}>
<input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
<input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
<div style={{display:'flex',gap:8}}>
<button type="submit">Entrar</button>
</div>
</form>
</div>
)
}