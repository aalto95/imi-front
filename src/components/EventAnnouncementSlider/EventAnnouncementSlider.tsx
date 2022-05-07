import { FunctionComponent, useState } from 'react'
import { Slide } from '../../models/slide'
import {format} from 'date-fns'
import arrowRight from '../../assets/right-svgrepo-com.svg'
import arrowLeft from '../../assets/left-svgrepo-com.svg'
import "./EventAnnouncementSlider.css"

interface EventAnnouncementSliderProps {
  slides: Slide[]
}
 
const EventAnnouncementSlider: FunctionComponent<EventAnnouncementSliderProps> = ({slides}) => {
  const [slideArray, setSlideArray] = useState<Slide[]>(slides)
  const handleSlideLeft = () => {
    setSlideArray([slideArray[slideArray.length - 1], ...slideArray.slice(0, slideArray.length - 1)])
  }
  const handleSlideRight = () => {
    setSlideArray([...slideArray.slice(1), slideArray[0]])
  }

  return (
    <div className="bg-light-gray py-8">
      <div className="flex justify-between items-center mx-4 sm:mx-8 md:mx-12 mb-4">
        <h1 className="text-terracota text-xl text-left">АНОНС МЕРОПРИЯТИЙ</h1>
        <p className="text-black text-sm text-right">ВСЕ МЕРОПРИЯТИЯ</p>
      </div>
      <div className="flex justify-between items-center">
        <button onClick={handleSlideLeft} className="p-2">
          <img src={arrowLeft} alt="" />
        </button>
        <div className="flex w-full justify-between items-center">
          {slideArray.slice(0, 4).map((slide, i) => {
            return (
            <div key={slide.label + i} id={'item' + i.toString()} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img src={slide.image} alt="" className="h-72 w-full object-cover"/>
              <p className="text-black mt-6 mb-10">{slide.label}</p>
              <div className="flex justify-end">
                <p className="text-gray-500">{format(new Date(), 'dd/MM/yyyy')}</p>
              </div>
            </div>
            )
          })}
        </div>
        <button onClick={handleSlideRight} className="p-2">
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
 
export default EventAnnouncementSlider;