import { IFilter } from './interfaces/IFilter'

export const Filter = ({search, setSearch}: IFilter<string>): JSX.Element => {
  return (
    <label>
      Filter:
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
    )
}
