
import { format, getMonth } from 'date-fns'
import { FunctionComponent, useState } from 'react'
import { Slide } from '../models/slide'
import { ru } from 'date-fns/locale'

interface NewsSliderProps {
  slides: Slide[]
}
 
const NewsSlider: FunctionComponent<NewsSliderProps> = ({slides}) => {
  const [firstSlide, setFirstSlide] = useState(0)
  return (
    <div className="my-8">
      <div className="flex justify-between mx-4 sm:mx-8 md:mx-12 mb-4">
        <h1 className="text-terracota">НОВОСТИ ИМИ</h1>
        <p className="text-black">Все новости</p>
      </div>
      <div className="flex">
        <div style={{backgroundImage: `url(${slides[firstSlide].image})`}} className='w-full xs:w-1/2 md:w-1/3 h-80 bg-cover flex justify-center'>
          <h2 className="text-white">{slides[firstSlide].paragraph}</h2>
        </div>
        <div className='hidden xs:block w-1/2 md:w-1/3'>
          <img src={slides[firstSlide + 1].image} alt="" className="h-48 w-full object-cover"/>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold">{slides[firstSlide + 1].label}</h3>
              <p className="text-black">{slides[firstSlide + 1].paragraph}</p>
            </div>
            <div className="flex justify-end">
              <p className="text-black">{format(new Date(), 'dd/MM/yyyy')}</p>
            </div>
          </div>
        </div>
        <div className='w-1/3 hidden md:block'>
          <img src={slides[firstSlide + 2].image} alt="" className="h-48 w-full object-cover"/>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold">{slides[firstSlide + 2].label}</h3>
              <p className="text-black">{slides[firstSlide + 2].paragraph}</p>
            </div>
            <div className="flex justify-end">
                <p className="text-black">{format(new Date(), 'dd/MM/yyyy')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NewsSlider;