import { useEffect, useState } from "react"
import { Filter } from "../Filter"
import { IConfig } from "../interfaces/IConfig"
import { IMovie } from "../interfaces/IMovie"
import { Movie } from "./Movie"

const API_URL = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key='
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key='

export const MoviesList = (): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<IMovie[]>([])
  const [config, setConfig] = useState<IConfig>({} as IConfig);

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API)
      const data = await res.json()
      setMovies(data.results)
    } catch (e) {
      console.error(e)
    }
  }

  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL + process.env.REACT_APP_MOVIE_API)
      const data = await res.json()
      setConfig(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMovies()
    getConfig()
  }, [])
  return (
    <div>
      <Filter search={search} setSearch={setSearch} />
      <ul className="movies-list">
        { movies.filter((item: IMovie): boolean => item.title.includes(search))
            .map((item: IMovie): JSX.Element =>
              <Movie movie={item} key={item.id} config={config.images}/>
            )
        }
      </ul>
    </div>
  )
}
