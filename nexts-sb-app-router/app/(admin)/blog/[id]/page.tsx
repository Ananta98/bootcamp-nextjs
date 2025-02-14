'use client'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

// const BlogDetail = async ({
//   params,
// }: {
//   params: Promise<{
//     id: string
//   }>
// }) => {
//   const id = (await params).id
//   return <div>Blog Detail Page {id}</div>
// }

const BlogDetail = () => {
  const params = useParams()
  const search = useSearchParams()
  const query = Object.fromEntries(search.entries())
  return (
    <div>
      Blog Detail Page {params.id}, dynamic: {params.id}, user: {query.user},
      age: {query.age}
    </div>
  )
}

export default BlogDetail
