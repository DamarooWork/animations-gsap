'use client'

import Link from 'next/link'
import FirstBox from './components/main/FirstBox'
import { useEffect, useState } from 'react'
import SecondBox from './components/main/SecondBox'
import Image from 'next/image'
import arrowDown from '../../public/icons/arrowDown.png'
import ThirdBox from './components/main/ThirdBox'
export default function Home() {
  const [show, setShow] = useState(0)
  useEffect(() => {
    setShow(window.scrollY)
    window.addEventListener('scroll', () => setShow(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setShow(window.scrollY))
    }
  }, [])
  return (
    <>
      <FirstBox />
      <SecondBox />
      <ThirdBox />
      <Link className="absolute top-10 right-10" href={`/blog`}>
        Go to Blog page
      </Link>
      {show < 300 ? (
        <section
          className="flex flex-col items-center gap-2 text-2xl fixed top-[90vh] 
        left-[50%] translate-x-[-50%]"
        >
          <p>Scroll down</p>
          <Image
            className="w-6 animate-bounce"
            src={arrowDown}
            alt="arrow down"
          ></Image>
        </section>
      ) : null}
    </>
  )
}
