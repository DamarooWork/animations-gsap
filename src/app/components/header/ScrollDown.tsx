'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import arrowDown from '../../../../public/icons/arrowDown.png'
export default function ScrollDown() {
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
      {show < 300 ? (
        <section
          className="flex flex-col items-center gap-2 text-2xl fixed top-[80vh] lg:top-[90vh] 
        left-[50%] translate-x-[-50%]"
        >
          <p className="text-orange-400">Scroll down</p>
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
