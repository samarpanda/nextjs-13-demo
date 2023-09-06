import Image from 'next/image'

interface XkcdData {
  id: number
  img: string
  title: string
}

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/xkcd')
  const data: XkcdData = await res.json()
  return data
}

const HomePage = async () => {
  const data = await getData()
  return (
    <div className="mx-6">
      <h1>XKCD Comic</h1>
      <h2>{data.title}</h2>
      <Image src={data.img} alt={data.title} width={740} height={601} />
    </div>
  )
}

export default HomePage
