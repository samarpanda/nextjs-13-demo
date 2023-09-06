import { NextResponse } from 'next/server'
export async function GET(request: Request) {
  const data = {
    id: 936,
    img: 'https://imgs.xkcd.com/comics/password_strength.png',
    title:
      'To anyone who understands information theory and security and is in an infuriating argument with someone who does not (possibly involving mixed case), I sincerely apologize.',
  }

  return NextResponse.json(data)
}
