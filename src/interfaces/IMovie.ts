import { IGenre } from "./IGenre";

export interface IMovie {
  id: number,
  title: string,
  poster_path: string,
  overview: string,
  genres: IGenre[],
  backdrop_path: string,
}
