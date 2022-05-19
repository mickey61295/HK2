import { AppBar, Button, styled, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'center',
	gap: '10px',
	alignItems: 'center',
	backgroundColor: 'rgb(34, 37, 57)',
})

export default function Navbar() {
	const navigate = useNavigate()
	return (
		<>
			<AppBar position="sticky">
				<StyledToolbar>
					<Button
						onClick={() => {
							navigate('/movies')
						}}
						sx={{ color: 'white' }}
					>
						<Typography variant="h6">Movies</Typography>
					</Button>
					<Button
						onClick={() => {
							navigate('/cinemas')
						}}
						sx={{ color: 'white' }}
					>
						<Typography variant="h6">Cinemas</Typography>
					</Button>
				</StyledToolbar>
			</AppBar>
		</>
	)
}
