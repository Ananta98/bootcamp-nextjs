import CreateForm from './create'

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
      <CreateForm />
      <div className="grid grid-cols-4 gap-4">
        {notes.data.map((el) => (
          <div key={el.id} className="p-4 bg-white shadow-sm rounded-lg">
            <h1>{el.title}</h1>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {notes.data.map((el) => (
          <div key={el.id} className="p-4 bg-white shadow-sm rounded-lg">
            <h1>{el.title}</h1>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notes
