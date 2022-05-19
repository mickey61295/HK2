import {
	AppBar,
	Avatar,
	Box,
	InputBase,
	styled,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@mui/material'
import React, { useState } from 'react'
import { AcUnit } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'rgb(46, 49, 71)',
})

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}))

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}))

export const Header = () => {
	const user = {
		name: 'Mahesh',
		avatar:
			'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
	}
	const [userState, Setuserstate] = useState('Logged Out')
	const [open, setopen] = useState(false)
	const navigate = useNavigate()
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Button
					onClick={() => {
						navigate('/')
					}}
					sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}
				>
					<Typography variant="h6">Bookies</Typography>
				</Button>
				<IconButton sx={{ color: 'white' }}>
					<AcUnit sx={{ display: { xs: 'block', sm: 'none' } }} />
				</IconButton>
				<Search
					sx={{
						maxWidth: '900px',
						position: 'absolute',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<InputBase placeholder="Search..." />
				</Search>
				<Icons>
					<Avatar
						onClick={() => setopen(true)}
						sx={{ display: { xs: 'none', sm: 'block' }, height: 30, width: 30 }}
						src={user.avatar}
					/>
				</Icons>
				<UserBox onClick={() => setopen(true)}>
					<Avatar sx={{ height: 30, width: 30 }} src={user.avatar} />
					<Typography>{user.name}</Typography>
				</UserBox>
			</StyledToolbar>

			{userState === 'Logged In' ? (
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					open={open}
					onClose={(e) => setopen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem onClick={() => {}}>Logout</MenuItem>
				</Menu>
			) : (
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					open={open}
					onClose={(e) => setopen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<MenuItem
						onClick={() => {
							navigate('/login')
							setopen(false)
						}}
					>
						Log In
					</MenuItem>
				</Menu>
			)}
		</AppBar>
	)
}
