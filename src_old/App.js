import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Header } from './components/Header'
import Movies from './pages/Movies'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Cinemas from './pages/Cinemas'
import { UserContext } from './contexts/UserContext'
import { useState } from 'react'

function App() {
	const [user, setUser] = useState()
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className="App">
				<Header />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/cinemas" element={<Cinemas />} />
				</Routes>
			</div>
		</UserContext.Provider>
	)
}

export default App
