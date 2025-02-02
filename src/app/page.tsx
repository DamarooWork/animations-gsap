import Link from 'next/link'
import Header from './components/header/Header'

export default function Home() {
  return (
    <>
     <Header/>
     <Link className='absolute top-10 right-10' href={`/blog`}>Go to Blog page</Link>
    </>
  )
}
