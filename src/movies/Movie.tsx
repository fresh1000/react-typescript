import { IImage } from '../interfaces/IImage';
import { IMovie } from '../interfaces/IMovie'
import { Link } from 'react-router-dom'

export const Movie = ({ movie, config }: {movie: IMovie, config: IImage}): JSX.Element => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <li>
        {config?.base_url && (
          <img src={config.base_url + 'w342' + movie.poster_path} alt={movie.title + ' Poster'}/>
        )
        }
        <h3>{movie.title}</h3>
      </li>
    </Link>
  )
}
