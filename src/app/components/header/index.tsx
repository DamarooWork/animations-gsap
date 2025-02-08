import Curtain from './Curtain'
import HeaderText from './HeaderText'
import Links from './Links'
import ScrollDown from './ScrollDown'

export default function Header() {
  return (
    <header className="w-full h-[100vh] flex justify-center items-center ">
      <Links/>
      <HeaderText />
      <ScrollDown />
      <Curtain/>
    </header>
  )
}
