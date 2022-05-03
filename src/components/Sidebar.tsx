import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import closeIcon from '../assets/close-icon.svg'
import { sidebarState } from '../recoil/atoms/sidebarAtom'

export const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useRecoilState(sidebarState)
  const onCloseClick = () => {
    setIsSidebarActive(!isSidebarActive)
    document.body.style.overflow = "visible"
  }
  const [navigation] = useState([
    {
      name: 'Институт',
      path: '/institute'
    },
    {
      name: 'Абитуриентам',
      path: '/enrollees'
    },
    {
      name: 'Студентам',
      path: '/students'
    },
    {
      name: 'Выпускникам',
      path: '/graduates'
    },
    {
      name: 'Работникам',
      path: '/employees'
    },
    {
      name: 'ПОС ИМИ',
      path: '/posimi'
    },
    {
      name: 'Трудоустройство',
      path: '/work'
    }
  ])
  return (
    <div className="block w-full h-screen fixed p-4 bg-berlin-blue top-0 z-10 lg:hidden pr-5 pt-6">
      <div className="flex justify-end">
        <button onClick={onCloseClick}>
          <img src={closeIcon} alt="close-icon" className="w-6" />
        </button>
      </div>
      <div className="flex flex-col">
        {navigation.map((element) => {
          return (
            <Link key={element.name} to={element.path} onClick={onCloseClick}>
              <p className="text-xl font-bold m-2">{element.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}