// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id?: string | string[] | undefined
  name?: string
  message?: string
  data?: object
  headers?: string | string[] | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    res.status(201).json({
      id: req?.query?.id,
      name: 'John Doe',
      data: req.body,
      headers: req?.headers['api-token'],
    })
  } else {
    res.status(500).json({ message: 'forbidden' })
  }
}
