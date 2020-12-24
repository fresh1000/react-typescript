import { useState } from 'react'

export const Accordion = (): JSX.Element => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  return (
    <div>
      { isToggled &&
        <h3>Show</h3>
      }
      <button
        onClick={() => setIsToggled(!isToggled)}
      >Toggle</button>
    </div>
  )
}
