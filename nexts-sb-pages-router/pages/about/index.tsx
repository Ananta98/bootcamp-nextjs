import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  ssr: false,
  loading: () => <p>Loading</p>,
})

const about = () => {
  return (
    <div>
      <h1>About Page</h1>
      <HeavyComponent />
    </div>
  )
}

export default about
