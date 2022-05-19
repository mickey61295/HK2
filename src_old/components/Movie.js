import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import '../App.css'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export default function Movie({ movie }) {
	return (
		<Card
			className="movieContainer"
			sx={{ borderRadius: '5px', height: '300px', display: 'flex' }}
		>
			<CardMedia
				component="img"
				sx={{
					Width: '75px',
					objectFit: 'contain',
					borderRadius: '5px',
					minWidth: '250px',
				}}
				image={movie.poster}
				alt={movie.name}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<CardContent
						sx={{ margin: '0', flex: '1 0 auto', alignItems: 'center' }}
					>
						<Typography component="div" variant="h5">
							{`${movie.name}`}
						</Typography>
					</CardContent>
					<CardContent sx={{ flex: '1 0 auto', alignItems: 'center' }}>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							{`${movie.rating}⭐`}
						</Typography>
					</CardContent>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						alignItems: 'center',
						padding: '16px',
					}}
				>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						align="justify"
					>
						{`${movie.summary}`}
					</Typography>
				</Box>
				<Box className="Booking-Button">
					<Button>Book Now</Button>
				</Box>
			</Box>
		</Card>
	)
}
