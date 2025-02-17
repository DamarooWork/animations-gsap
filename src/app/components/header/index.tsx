import Curtain from './Curtain'
import HeaderText from './HeaderText'
import Links from './Links'
import ScrollDown from './ScrollDown'

export default function Header() {
  return (
    <header className="min-h-screen flex justify-center items-center ">
      <HeaderText />
      <ScrollDown />
      <Curtain />
      <Links />
    </header>
  )
}
