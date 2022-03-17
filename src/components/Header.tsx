import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imi_logo.png'

export const Header = () => {
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
    <header className="h-screen mx-32">
      <div className="flex justify-between my-12">
        <div className="flex items-center">
          <img src={logo} alt="imi-logo" className="w-24 mr-4" />
          <h1 className="text-2xl w-72">ИНСТИТУТ МАТЕМАТИКИ И ИНФОРМАТИКИ</h1>
        </div>
        <div className="flex items-center">
          <Link to="/" className="mr-4 text-2xl">Контакты</Link>
          <a href="tel:+74112496834" className="text-2xl">+7 (4112) 49-68-34</a>
        </div>
      </div>
      <nav className="flex justify-between">
        {
          navigation.map((navElem) => (
          <Link to={navElem.path} className="uppercase text-terracota text-2xl">{navElem.name}</Link>
          ))
        }
      </nav>
  </header>
  )
}