'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import SpinningCircles from './components/main/spinningCircles'
import SlidesText from './components/main/slidesText'
import SlidesImages from './components/main/slidesImages'
import OceanCircles from './components/main/oceanCircles'

export default function Home() {

  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
 

  return (
    <>
      <SpinningCircles />
      <SlidesText />
      <SlidesImages />
      <OceanCircles />
      
    </>
  )
}
