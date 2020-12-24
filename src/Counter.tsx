import { useState } from 'react'

export const Counter = (): JSX.Element => {

  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => setCount(count + 1)}
        >+</button>
      <button
      onClick={() => setCount(count - 1)}
      >-</button>
    </div>
  )
}
