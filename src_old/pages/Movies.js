import * as React from 'react'
import { moviesEndpoint } from '../global'
import Movie from '../components/Movie'

export default function Movies() {
	const [movies, setMovies] = React.useState()
	React.useEffect(() => {
		fetch(moviesEndpoint)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data)
			})
	}, [])

	return (
		<div className="listContainer">
			{movies && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
		</div>
	)
}
