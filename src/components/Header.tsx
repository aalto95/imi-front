import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import logo from '../assets/imi_logo.png'
import { sidebarState } from '../recoil/atoms/sidebarAtom'
import './Header.css'
import menuIcon from '../assets/menu-icon.svg'

export const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useRecoilState(sidebarState)
  const onHamburgerClick = () => {
    setIsSidebarActive(!isSidebarActive)
  }
  const [navigation] = useState([
    {
      name: 'Институт',
      path: '/'
    },
    {
      name: 'Абитуриентам',
      path: '/'
    },
    {
      name: 'Студентам',
      path: '/'
    },
    {
      name: 'Выпускникам',
      path: '/'
    },
    {
      name: 'Работникам',
      path: '/'
    },
    {
      name: 'ПОС ИМИ',
      path: '/'
    },
    {
      name: 'Трудоустройство',
      path: '/'
    }
  ])
  return (
    <header className="mx-12 xl:mx-24 2xl:mx-32 mb-4">
      <div className="flex justify-between my-12">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="imi-logo" className="w-10 md:w-16 lg:w-24 mr-4" />
          <h1 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-berlin-blue">ИНСТИТУТ МАТЕМАТИКИ<br/> И ИНФОРМАТИКИ</h1>
        </Link>
        <div className="hidden md:flex md:items-center">
          <Link to="/" className="mr-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Контакты</Link>
          <a href="tel:+74112496834" className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">+7 (4112) 49-68-34</a>
        </div>
        <button className="flex items-center md:hidden" onClick={() => onHamburgerClick()}>
          <img src={menuIcon} alt="menu icon" className="w-8" />
        </button>
      </div>
      <nav className="hidden md:visible md:flex md:justify-between">
        {
          navigation.map((navElem) => (
          <Link to={navElem.path} className="md:text-xs lg:text-sm xl:text-md 2xl:text-lg uppercase text-terracota" key={navElem.name}>{navElem.name}</Link>
          ))
        }
      </nav>
  </header>
  )
}