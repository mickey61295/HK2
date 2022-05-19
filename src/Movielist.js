import Button from '@mui/material/Button'
import { useLayoutEffect, useContext, useState } from 'react'
import { Profile } from './Movie'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { API } from './global'
// import Carousel from 'nuka-carousel'
import Carousel from 'react-multi-carousel'
import { UserContext } from './Contexts/UserContext'
import 'react-multi-carousel/lib/styles.css'

function useWindowSize(setCentre) {
	const [size, setSize] = useState([0, 0])
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight])
			if (window.innerWidth > 1400) {
				setCentre(true)
			} else {
				setCentre(false)
			}
		}
		window.addEventListener('resize', updateSize)
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])
	return size
}

export function Movielist({ props }) {
	const { user, setUser } = useContext(UserContext)
	const [movieList, setMovieList] = useState([])

	const getMovies = () => {
		fetch(`${API}`)
			.then((response) => response.json())
			.then((data) => setMovieList(data))
	}
	useEffect(() => getMovies(), [])
	const [centre, setCentre] = useState(false)

	const navigate = useNavigate()

	useWindowSize(setCentre)
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1429 },
			items: 3,
		},
		desktop: {
			breakpoint: { max: 1429, min: 1059 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1059, min: 800 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 800, min: 0 },
			items: 1,
		},
	}
	return (
		<div className="App">
			<div className="pageContainer">
				<Carousel
					infinite={true}
					centerMode={centre}
					autoPlay={false}
					keyBoardControl={true}
					responsive={responsive}
				>
					{movieList.map((item) => (
						<Profile
							key={item._id}
							movie={item}
							id={item._id}
							deleteButton={
								user ? (
									user.role == 'admin' ? (
										<Button
											sx={{ margin: '0' }}
											onClick={() => {
												fetch(`${API}/deletemovie/${item._id}`, {
													method: 'DELETE',
												}).then(() => getMovies())
											}}
											className="deletebutton"
											color="error"
											aria-label="delete-button"
										>
											<DeleteIcon />
										</Button>
									) : (
										''
									)
								) : (
									''
								)
							}
							editButton={
								user ? (
									user.role == 'admin' ? (
										<Button
											onClick={() => {
												navigate('/movies/edit/' + item._id)
											}}
											className="deletebutton"
											color="secondary"
											aria-label="edit-button"
										>
											<EditIcon />
										</Button>
									) : (
										''
									)
								) : (
									''
								)
							}
						/>
					))}
				</Carousel>
			</div>
		</div>
	)
}
