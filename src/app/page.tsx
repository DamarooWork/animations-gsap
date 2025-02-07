'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import SpinningCircles from './components/main/SpinningCircles'
import SlidesText from './components/main/SlidesText'
import SlidesImages from './components/main/SlidesImages'
import OceanCircles from './components/main/oceanCircles/OceanCircles'

import arrowDown from '../../public/icons/arrowDown.png'
export default function Home() {
  const [show, setShow] = useState(0)
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  useEffect(() => {
    setShow(window.scrollY)
    window.addEventListener('scroll', () => setShow(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setShow(window.scrollY))
    }
  }, [])

  return (
    <>
      <SpinningCircles />
      <SlidesText />
      <SlidesImages />
      <OceanCircles />
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
