import { FunctionComponent, useState } from 'react'
import { Slide } from '../../models/slide'
import styles from './Banner.module.css'
import arrowRight from '../../assets/right-svgrepo-com.svg'
import arrowLeft from '../../assets/left-svgrepo-com.svg'

interface BannerProps {
  slides: Slide[]
}
 
const Banner: FunctionComponent<BannerProps> = ({slides}) => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(0)
  const handleSlideLeft = () => {
    if (currentSlideId === 0) {
      setCurrentSlideId(slides.length - 1)
    } else {
      setCurrentSlideId(prevVal => prevVal - 1)
    }
  }
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

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {slides.map((slide, id) => (
          <div 
            key={slide.image} 
            className={`${styles.slide}`} 
            style={currentSlideId === id ? {backgroundImage: `url(${slide.image})`} : {display: 'none'}}
          >
            <h1>{slide.label}</h1>
            <p>{slide.paragraph}</p>
          </div>
        ))}
        <button className={styles.slideButton} onClick={handleSlideLeft}>
        <img src={arrowLeft} alt="" className={styles.arrow} />
        </button>
        <div className={styles.middleSection} id="slider">
          {slides.map((slide, id) => (
            <button key={id} className={styles.circleWrapper} onClick={() => onDotClick(id)}>
              <div className={styles.circle} style={currentSlideId === id ? {} : {opacity: 0.5}}>
              </div>
            </button>
          ))}
        </div>
        <button className={styles.slideButton} onClick={handleSlideRight}>
          <img src={arrowRight} alt="" className={styles.arrow} />
        </button>
      </div>
    </div>
  )
}
 
export default Banner;