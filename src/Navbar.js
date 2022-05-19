import { AppBar, Button, styled, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './Contexts/UserContext'
import { useContext } from 'react'
const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'center',
	gap: '10px',
	alignItems: 'center',
	backgroundColor: '#333',
})

export default function Navbar() {
	const { user, setUser } = useContext(UserContext)
	const navigate = useNavigate()
	return (
		<>
			<AppBar position="sticky">
				<StyledToolbar className='myNav'>
					<Button color="inherit" onClick={() => navigate('/movies')}>
						Movies
					</Button>
					<Button color="inherit" onClick={() => navigate('/cinemas')}>
						Cinemas
					</Button>
					{user && user.role == 'admin' ? (
						<Button color="inherit" onClick={() => navigate('/movies/add')}>
							Add Movie
						</Button>
					) : null}
					{user && user.role == 'admin' ? (
						<Button color="inherit" onClick={() => navigate('/theatres/add')}>
							Add Theatre
						</Button>
					) : (
						''
					)}
					<div className="accountContainer">
						{user ? (
							<Button color="inherit" onClick={() => setUser(null)}>
								Logout
							</Button>
						) : (
							<Button color="inherit" onClick={() => navigate('/login')}>
								Login
							</Button>
						)}
					</div>
				</StyledToolbar>
			</AppBar>
		</>
	)
}
