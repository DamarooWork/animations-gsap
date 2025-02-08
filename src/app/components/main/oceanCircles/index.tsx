import Header from './Header'
import Circles from './Circles'

import ocean1 from '@/../public/images/oceans/1.jpg'
import ocean2 from '@/../public/images/oceans/2.jpg'
import ocean3 from '@/../public/images/oceans/3.jpg'
import ocean4 from '@/../public/images/oceans/4.jpg'
import ocean5 from '@/../public/images/oceans/5.jpg'

const imagesArr: IImage[] = [
  { url: ocean1, alt: 'ocean1' },
  { url: ocean2, alt: 'ocean2' },
  { url: ocean3, alt: 'ocean3' },
  { url: ocean4, alt: 'ocean4' },
  { url: ocean5, alt: 'ocean5' },
]

export default function OceanCircles() {
  return (
    <article id="oceanCircles" className="mt-[20vh] mb-[10vh] ">
      <Header />
      <Circles images={imagesArr} />
    </article>
  )
}
