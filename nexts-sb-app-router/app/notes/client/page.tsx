'use client'

import { useEffect, useState } from 'react'

type ListNotes = {
  id: string
  title: string
  description: string
  deleted_at: string
  created_at: string
  updated_at: string
}

type Notes = {
  success: boolean
  message: string
  data: ListNotes[]
}

const Notes = () => {
  const [data, setData] = useState<ListNotes[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://service.pace-unv.cloud/api/notes')
      .then((res) => res.json())
      .then((data) => setData(data?.data || []))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <>
      {data.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </>
  )
}

export default Notes
