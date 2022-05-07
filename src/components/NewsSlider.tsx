
import { format } from 'date-fns'
import { FunctionComponent, useState } from 'react'
import { Slide } from '../models/slide'
import arrowRight from '../assets/right-svgrepo-com.svg'
import arrowLeft from '../assets/left-svgrepo-com.svg'

interface NewsSliderProps {
  slides: Slide[]
}
 
const NewsSlider: FunctionComponent<NewsSliderProps> = ({slides}) => {
  const [firstSlideId, setFirstSlideId] = useState(0)
  const [slideArray, setSlideArray] = useState<Slide[]>(slides)
  const handleSlideLeft = () => {
    setSlideArray([slideArray[slideArray.length - 1], ...slideArray.slice(0, slideArray.length - 1)])
  }
  const handleSlideRight = () => {
    setSlideArray([...slideArray.slice(1), slideArray[0]])
  }

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mx-4 sm:mx-8 md:mx-16 mb-4">
        <h1 className="text-terracota text-xl">НОВОСТИ ИМИ</h1>
        <p className="text-black text-sm">ВСЕ НОВОСТИ</p>
      </div>
      <div className="flex">
        <button className="p-2" onClick={handleSlideLeft}>
          <img src={arrowLeft} alt="" />
        </button>
        <div style={{backgroundImage: `url(${slideArray[firstSlideId].image})`}} className='w-full sm:w-1/2 lg:w-1/3 h-96 md:h-140 bg-cover flex justify-center'>
          <h2 className="text-white">{slideArray[firstSlideId].paragraph}</h2>
        </div>
        <div className='hidden sm:block w-1/2 lg:w-1/3'>
          <img src={slideArray[firstSlideId + 1].image} alt="" className="h-68 md:h-96 w-full object-cover"/>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold">{slideArray[firstSlideId + 1].label}</h3>
              <p className="text-black">{slideArray[firstSlideId + 1].paragraph}</p>
            </div>
            <div className="flex justify-end">
              <p className="text-black">{format(new Date(), 'dd/MM/yyyy')}</p>
            </div>
          </div>
        </div>
        <div className='w-1/3 hidden lg:block'>
          <img src={slideArray[firstSlideId + 2].image} alt="" className="h-96 w-full object-cover"/>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold">{slideArray[firstSlideId + 2].label}</h3>
              <p className="text-black">{slideArray[firstSlideId + 2].paragraph}</p>
            </div>
            <div className="flex justify-end">
                <p className="text-black">{format(new Date(), 'dd/MM/yyyy')}</p>
            </div>
          </div>
        </div>
        <button className="p-2" onClick={handleSlideRight}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
 
export default NewsSlider;