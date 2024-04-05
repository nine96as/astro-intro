import { useState } from 'preact/hooks'

const Greeting = ({ messages }) => {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)]

  const [greeting, setGreeting] = useState(messages[0])

  return (
    <div>
      <p>
        <strong>{greeting}</strong>! <em>Thank you for visiting</em> 🫡
      </p>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  )
}

export default Greeting
