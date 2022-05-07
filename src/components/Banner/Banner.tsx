import { FunctionComponent, useState } from 'react'
import { Slide } from '../../models/slide'
import styles from './Banner.module.css'
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
    <div className="w-full h-96 flex justify-center items-center relative">
      <div className={styles.slider}>
        {slides.map((slide, id) => (
          <div 
            key={slide.label + id} 
            className={`${styles.slide}`} 
            style={currentSlideId === id ? {backgroundImage: `url(${slide.image})`} : {display: 'none'}}
          >
            <h1>{slide.label}</h1>
            <p>{slide.paragraph}</p>
          </div>
        ))}
        <div className={styles.middleSection} id="slider">
          {slides.map((slide, id) => (
            <button key={id} className={styles.circleWrapper} onClick={() => onDotClick(id)}>
              <div className={styles.circle} style={currentSlideId === id ? {} : {opacity: 0.5}}>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
 
export default Banner;