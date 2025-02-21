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

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

export default async function Page() {
  const notes: Notes = await fetch(
    `https://service.pace-unv.cloud/api/notes`,
  ).then((res) => res.json())
  return (
    <main>
      <ul>
        {notes.data.map((el) => (
          <li
            key={el.id}
            style={{
              border: '1px solid black',
              marginBottom: '10px',
              padding: '8px',
            }}
          >
            <a href={`/notes/isr/${el.id}`}>{el.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
