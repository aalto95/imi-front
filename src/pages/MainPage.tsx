import { FunctionComponent } from 'react'
import Banner from '../components/Banner'
import TileBlocks from '../components/TileBlocks'

interface MainPageProps {
  
}
 
const MainPage: FunctionComponent<MainPageProps> = () => {
  const mockData = [
    {
      image: "https://sun9-83.userapi.com/impg/IfI9YKFHmUsD4JgbtZb-ypJkHYQlgTm-7GmqDQ/EUnv3P-8ALY.jpg?size=2560x1920&quality=96&sign=8dda5b4a07127cc8bac6e7af68396ce6&type=album",
      label: "label 1",
      paragraph: "paragraph 1",
    },
    {
      image: "https://sun9-73.userapi.com/impg/1Ms6FrjnofAR2M7OcH58xwNW7OYBnVw1yPB83g/O-g6UWbxQiY.jpg?size=2048x2048&quality=96&sign=6656493467f16b3aebcf658a77a92635&type=album",
      label: "label 2",
      paragraph: "paragraph 2",
    },
    {
      image: "https://sun9-70.userapi.com/impg/chs7j7FOumnwuJ1xTQDnJ_fGRNRDabreLdWF9A/f997PEVwXOI.jpg?size=640x853&quality=96&sign=9f03d03bc1d5ead9d5a31b0a7a3d2c21&type=album",
      label: "label 3",
      paragraph: "paragraph 3",
    }
  ]
  return (
    <>
      <Banner slides={mockData}/>
      <TileBlocks />
    </>
  );
}
 
export default MainPage;