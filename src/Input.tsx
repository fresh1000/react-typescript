import { useState } from 'react'

export const Input = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('')
  return (
    <div>
      {inputValue &&
        <h3>{inputValue}</h3>
      }
      <input
        value={inputValue}
        onChange={ (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value) }
        />
    </div>
  )
}
