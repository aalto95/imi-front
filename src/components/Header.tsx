import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import logo from '../assets/imi_logo.png'
import { sidebarState } from '../recoil/atoms/sidebarAtom'
import './Header.css'

export const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useRecoilState(sidebarState)
  const onHamburgerClick = () => {
    setIsSidebarActive(!isSidebarActive)
    console.log(isSidebarActive)
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
    <header className="mx-4 xl:mx-24 2xl:mx-32">
      <div className="flex justify-between my-12">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="imi-logo" className="w-10 md:w-16 lg:w-24 mr-4" />
          <h1 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-72 text-berlin-blue">ИНСТИТУТ МАТЕМАТИКИ И ИНФОРМАТИКИ</h1>
        </Link>
        <div className="hidden lg:flex lg:items-center">
          <Link to="/" className="mr-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Контакты</Link>
          <a href="tel:+74112496834" className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">+7 (4112) 49-68-34</a>
        </div>
        <div className="flex items-center lg:hidden">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={() => onHamburgerClick()}/> 
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <nav className="hidden lg:visible lg:flex lg:justify-between">
        {
          navigation.map((navElem) => (
          <Link to={navElem.path} className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl uppercase text-terracota" key={navElem.name}>{navElem.name}</Link>
          ))
        }
      </nav>
  </header>
  )
}