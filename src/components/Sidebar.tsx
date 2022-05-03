import { useRecoilState } from 'recoil'
import closeIcon from '../assets/close-icon.svg'
import { sidebarState } from '../recoil/atoms/sidebarAtom'

export const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useRecoilState(sidebarState)
  const onCloseClick = () => {
    setIsSidebarActive(!isSidebarActive)
  }
  return (
    <div className="block w-full h-screen fixed bg-berlin-blue top-0 z-10 lg:hidden pr-5 pt-6">
      <div className="flex justify-end">
        <button onClick={onCloseClick}>
          <img src={closeIcon} alt="close-icon" className="w-6" />
        </button>
      </div>
    </div>
  )
}