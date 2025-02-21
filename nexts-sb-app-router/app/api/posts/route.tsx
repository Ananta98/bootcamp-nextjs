import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  console.log('name params => ', searchParams.get('name'))
  return NextResponse.json({ message: 'Hello' }, { status: 200 })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ payload: body }, { status: 200 })
}
