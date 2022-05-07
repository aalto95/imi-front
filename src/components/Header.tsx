import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import logo from '../assets/imi_logo.png'
import { sidebarState } from '../recoil/atoms/sidebarAtom'
import menuIcon from '../assets/menu-icon.svg'
import {v4} from 'uuid';

export const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useRecoilState(sidebarState)
  const onHamburgerClick = () => {
    setIsSidebarActive(!isSidebarActive)
    document.body.style.overflow = "hidden"
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
        path: '/graduates'
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

  return (
    <>
      <header className="h-18 md:h-auto px-4 md:px-12 xl:px-24 2xl:px-32 bg-white w-full fixed md:static z-30">
        <div className="flex justify-between my-4 md:my-8 xl:my-12">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="imi-logo" className="w-10 md:w-16 lg:w-24 mr-4" />
            <h1 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-berlin-blue">ИНСТИТУТ МАТЕМАТИКИ<br/> И ИНФОРМАТИКИ</h1>
          </Link>
          <div className="hidden md:flex md:items-center">
            <Link to="/" className="mr-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Контакты</Link>
            <a href="tel:+74112496834" className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">+7 (4112) 49-68-34</a>
          </div>
          <button className="flex items-center md:hidden" onClick={onHamburgerClick}>
            <img src={menuIcon} alt="menu icon" className="w-8" />
          </button>
        </div>
        <nav className="w-full hidden md:visible md:flex md:justify-between md:pb-4 absolute hover:z-30 left-0 top-40 bg-white">
          {
            linkRepository.map((linkArray, i) => (
              <div key={v4()} className="flex flex-col w-1/6 items-center">
                <Link to={navigation[i].path} className="md:text-xs lg:text-sm xl:text-md 2xl:text-lg uppercase text-terracota" key={navigation[i].name}>{navigation[i].name}</Link>
                <div className="flex flex-col items-center text-center">
                  {
                    linkArray.map((link) => {
                      return (
                        <Link to={link.path} key={v4()} className="md:text-xs lg:text-sm xl:text-md 2xl:text-lg uppercase my-1 text-terracota">{link.name}</Link>
                      )
                    })
                  }
                </div>
              </div>
            ))
          }
        </nav>
      </header>
      <div className="h-18 md:hidden"></div>
    </>
  )
}