import { Dispatch } from 'react'

export interface IFilter<T> {
  search: T,
  setSearch: Dispatch<React.SetStateAction<T>>
}