import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { v4 } from 'uuid'
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
      name: 'Наука',
      path: '/science'
    },
  ])

  const [linkRepository] = useState([
    [
      {
        name: 'О нас',
        path: '/about_us'
      },
      {
        name: 'Новости',
        path: '/news'
      },
      {
        name: 'Фотогалерея',
        path: '/gallery'
      },
      {
        name: '3D-музей',
        path: '/3d_museum'
      },
      {
        name: 'Вопросы-ответы',
        path: '/employees'
      },
      {
        name: 'Мероприятия',
        path: '/posimi'
      }
    ],
    [
      {
        name: 'Направления и программы',
        path: '/areas_and_programs'
      },
      {
        name: 'Список документов',
        path: '/docs'
      },
      {
        name: 'Задать вопрос',
        path: '/ask_a_question'
      }
    ],
    [
      {
        name: 'Общежитие',
        path: '/dorm'
      },
      {
        name: 'Соцзащита',
        path: '/social_security'
      },
      {
        name: 'Расписание в кармане',
        path: '/timetable'
      },
      {
        name: 'ПОС ИМИ',
        path: '/posimi'
      }
    ],
    [
      {
        name: 'Трудоустройство',
        path: '/employment'
      },
      {
        name: 'Вакансии',
        path: '/vacancies'
      },
      {
        name: 'Ищу работу',
        path: '/i_seek_a_job'
      },
      {
        name: 'Предлагаю работу',
        path: '/i_offer_a_job'
      }
    ],
    [
      {
        name: 'Профсоюз',
        path: '/labor_union'
      },
      {
        name: 'Кураторам',
        path: '/curators'
      }
    ],
    [
      {
        name: 'Наука в ИМИ',
        path: '/science_in_nefu'
      },
      {
        name: 'Гранты, программы',
        path: '/grants_and_programs'
      },
      {
        name: 'Рекомендации оформления работ',
        path: '/recommendations_on_work_formalization'
      },
      {
        name: 'Проекты',
        path: '/projects',
      },
    ]
  ])

  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null)

  const openDropdown = (id: number) => {
    setActiveDropdownId(id)
  }

  return (
    <div className="block w-full h-screen fixed p-4 bg-berlin-blue top-0 z-30 pr-5 pt-6">
      <div className="flex justify-end">
        <button onClick={onCloseClick}>
          <img src={closeIcon} alt="close-icon" className="w-6" />
        </button>
      </div>
      <div className="flex flex-col items-start">
        {linkRepository.map((linkArray, i) => {
          return (
            <div key={v4()} className="flex flex-col">
              <button key={navigation[i].name} onClick={() => openDropdown(i)}>
                <p className="text-left text-white text-xl font-bold m-2">{navigation[i].name}</p>
              </button>
              {
                activeDropdownId === i && linkArray.map((link) => (
                  <Link to={link.path} key={v4()} className="ml-4 text-white" onClick={onCloseClick}>{link.name}</Link>
                ))
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}