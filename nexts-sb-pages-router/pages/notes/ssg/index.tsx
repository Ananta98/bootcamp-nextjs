import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React from 'react'

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

export default function NotesSSGPage({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {notes?.data.map((note: ListNotes) => (
        <Link
          href={`/notes/ssg/${note.id}`}
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

export const getStaticProps = (async () => {
  const notes = await fetch('https://service.pace-unv.cloud/api/notes').then(
    (res) => res.json(),
  )
  return {
    props: {
      notes,
    },
    revalidate: 3,
  }
}) satisfies GetStaticProps<{ notes: Notes }>
