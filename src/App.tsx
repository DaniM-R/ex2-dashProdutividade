import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { PrivateRoute } from './components/PrivateRoute'


const App: React.FC = () => {
return (
<>
<Header />
<Routes>
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
<Route path="/about" element={<About />} />
</Routes>
<Footer />
</>
)
}


export default App