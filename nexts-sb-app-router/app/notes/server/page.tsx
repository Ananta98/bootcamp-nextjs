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

async function getNotes() {
  const notes: Notes = await fetch(
    'https://service.pace-unv.cloud/api/notes',
  ).then((res) => res.json())
  return notes
}

const Notes = async () => {
  const notes = await getNotes()
  return (
    <>
      {notes.data.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </>
  )
}

export default Notes
