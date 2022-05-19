import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Movies from './Movies'

export default function Home() {
	const { user, setUser } = useContext(UserContext)
	return (
		<div>
			<h1>Backend 80% completed</h1>
			<h1>Frontend 10% completed</h1>
			<Movies />
		</div>
	)
}
