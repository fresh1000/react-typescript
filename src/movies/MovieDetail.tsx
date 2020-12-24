import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IGenre } from '../interfaces/IGenre'
import { IMovie } from '../interfaces/IMovie'
import { IMovieDetailParamType } from '../interfaces/IMovieDetailParamType'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key='
const IMAGE_URL = 'https://image.tmdb.org/t/p/'
const BACKDROP_SIZE = 'original'
const POSTER_SIZE = 'w342'

export const MovieDetail = () => {
  const { id } = useParams<IMovieDetailParamType>()
  const [movie, setMovie] = useState<IMovie>();

  const getMovie = async () => {
    try {
      const res = await fetch(`${BASE_URL + id + API_KEY + process.env.REACT_APP_MOVIE_API}`)
      const data = await res.json()
      console.log(data)
      setMovie(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMovie()
  }, [id])

  if (!movie) return null

  return (
    <div>
      <img
        className="backdrop"
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + ' Backdrop'}/>
      <div className="detail-details">
        <img
          className="detail-poster"
          src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
          alt={movie.title + ' Poster'}/>
        <h3>{movie?.title}</h3>
        <h3>{movie?.overview}</h3>
        <ul>{movie?.genres.map((genre: IGenre) => {
          return <li key={genre.id}>{genre.name}</li>
        })}</ul>
      </div>
    </div>
  )
}
