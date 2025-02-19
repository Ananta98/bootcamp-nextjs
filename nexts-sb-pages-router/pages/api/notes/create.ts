import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string().min(1, 'Title wajib di isi !'),
  description: z.string().min(1, 'Description wajib di isi !'),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  try {
    const validateData = formSchema.parse(req.body)
    const response = await fetch('https://service.pace-unv.cloud/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validateData),
    }).then((res) => res.json())
    if (response.success) {
      return res.status(201).json(response)
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = Object.keys(error.formErrors.fieldErrors)?.reduce(
        (acc, key) => {
          acc[key] = error.formErrors.fieldErrors[key]?.[0] || 'Unknown Error'
          return acc
        },
        {} as Record<string, string>,
      )
      return res.status(400).json({ errors })
    }
    return res.status(500).json({ message: 'Internal server error' })
  }
}
