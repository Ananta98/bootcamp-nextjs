import Link from 'next/link'
import useSWR from 'swr'

type ListNotes = {
  id: string
  title: string
  description: string
  deleted_at: string
  created_at: string
  updated_at: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const NoteClientPage = () => {
  const { data, isLoading, error } = useSWR(
    'https://service.pace-unv.cloud/api/notes',
    fetcher,
    {
      revalidateOnFocus: true,
    },
  )
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error...</div>
  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.data.map((note: ListNotes) => (
        <Link
          href={`/notes/server/${note.id}`}
          key={note.id}
          className="p-4 bg-white shadow-sm rounded-lg"
        >
          <h2>{note.title}</h2>
          <p>{note.description}</p>
        </Link>
      ))}
    </div>
  )
}

export default NoteClientPage
