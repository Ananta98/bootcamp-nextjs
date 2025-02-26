'use client'

// import { useCount } from '@/context'
import { useStore } from '@/store/dataStore'

const About = () => {
  // const { count, setCount } = useCount()
  const { inc } = useStore()
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => inc()}>Count++</button>
    </div>
  )
}

export default About
