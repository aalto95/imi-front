import { FunctionComponent, useState } from 'react'
import { Slide } from '../models/slide'
import { useInterval } from 'usehooks-ts'

interface BannerProps {
  slides: Slide[]
}
 
const Banner: FunctionComponent<BannerProps> = ({slides}) => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(0)
  const handleSlideRight = () => {
    if (currentSlideId === slides.length - 1) {
      setCurrentSlideId(0)
    } else {
      setCurrentSlideId(prevVal => prevVal + 1)
    }
  }
  const onDotClick = (id: number) => {
    setCurrentSlideId(id)
  }

  useInterval(() => {
    handleSlideRight()
  }, 3000)

  return (
    <div className="z-10 w-full h-96 flex justify-center items-center relative">
      <div className="w-full h-full flex justify-between items-center">
        {slides.map((slide, id) => (
          <div 
            key={slide.label + id} 
            className="flex justify-center items-center flex-col w-full h-full absolute bg-center bg-cover pointer-events-none" 
            style={currentSlideId === id ? {backgroundImage: `url(${slide.image})`} : {display: 'none'}}
          >
            <h1 className="text-white">{slide.label}</h1>
            <p className="text-white">{slide.paragraph}</p>
          </div>
        ))}
        <div className="h-full flex justify-center items-end flex-grow" id="slider">
          {slides.map((slide, id) => (
            <button key={id} className="z-20" onClick={() => onDotClick(id)}>
              <div className="w-3 h-3 bg-white rounded-full m-2 z-10" style={currentSlideId === id ? {} : {opacity: 0.5}}>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
 
export default Banner;