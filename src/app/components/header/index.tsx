import Curtain from './Curtain'
import HeaderText from './HeaderText'
import ScrollDown from './ScrollDown'

export default function Header() {
  return (
    <header className="w-full h-[100vh] flex justify-center items-center ">
      <HeaderText />
      <ScrollDown />
      <Curtain/>
    </header>
  )
}
