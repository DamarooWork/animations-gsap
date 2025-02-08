'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef } from 'react'
gsap.registerPlugin(useGSAP, ScrollToPlugin)

interface IHashLink {
  hash: string
  title: string
}
const linksArr: IHashLink[] = [
  {
    hash: '0',
    title: '#Home',
  },
  {
    hash: '#gsapCircles',
    title: '#GSAP Circles',
  },
  {
    hash: '#slidesText',
    title: '#What is GSAP?',
  },
  {
    hash: '#slidesImages',
    title: '#Animations with images',
  },
  {
    hash: '#oceanCircles',
    title: '#Oceans',
  },
]
export default function Links() {
  const refNav = useRef<HTMLElement>(null)
  const refLinks = useRef<HTMLButtonElement[]>([])
  useGSAP(
    () => {
      refLinks.current.forEach((link) => {
        gsap.from(link, {
          delay: 0.6,
          yPercent: 100,
          duration: 0.7,
          ease: 'none',
        })
      })
    },
    { scope: refNav }
  )

  function handleLinkClick(link: string) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: link },
      ease: 'power2.inOut',
    })
  }
  return (
    <nav
      ref={refNav}
      className="fixed text-sm sm:text-xl z-40 top-2 sm:top-10 right-0 text-orange-400 font-bold  "
    >
      {linksArr.map((link, i) => {
        return (
          <a
            key={link.hash}
            className="flex flex-col  justify-start items-end overflow-hidden "
          >
            <button
              ref={(node) => {
                if (node) {
                  refLinks.current[i] = node
                }
              }}
              onClick={() => handleLinkClick(link.hash)}
              className="block transition-[border]  duration-300 hover:border-l-orange-400 border-l-8 border-black bg-black p-1 hjover:p-2 rounded-l-sm hover:opacity-100 opacity-60"
            >
              {link.title}
            </button>
          </a>
        )
      })}
    </nav>
  )
}
