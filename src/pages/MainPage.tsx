import { FunctionComponent } from 'react'
import Banner from '../components/Banner'
import EventAnnouncementSlider from '../components/EventAnnouncementSlider/EventAnnouncementSlider'
import ForEnrollee from '../components/ForEnrollee'
import NewsSlider from '../components/NewsSlider'
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
    },
    {
      image: "https://sun9-65.userapi.com/s/v1/if2/fhWLyi7sM3DOyuGT1DwmsnLZ49_SzIJOJ8W6PS89wd2cpG54hE4thqqAWKRnzlXuxz6bsx5SFcU05AyAOxsXsgWo.jpg?size=604x604&quality=96&type=album",
      label: "label 4",
      paragraph: "paragraph 4",
    },
    {
      image: "https://sun9-15.userapi.com/s/v1/if1/kTWDA1qnBI48wCcJKtiXKbeJub0i_7ovZ7wobR6J3ScOsO8p9DQxNjEDdwsiP8Aiuw-erjRm.jpg?size=1093x1013&quality=96&type=album",
      label: "label 5",
      paragraph: "paragraph 5",
    },
    {
      image: "https://sun9-85.userapi.com/s/v1/if2/pzim_0jUrYcrJMzKxqtovyEtW6qL-6M9axhJGYzhnWwiR15LoaIpwN3Qb9Y-PTIBx7HNWJ1zWAG6bWBM27Ie_KYI.jpg?size=1280x960&quality=96&type=album",
      label: "label 6",
      paragraph: "paragraph 6",
    },    {
      image: "https://sun9-12.userapi.com/s/v1/if2/noL7D34w_8YcDmDdcJeoVNyaJ26yc7L-nPyChQ3QynK70N0V8aNqBAu1mJjwySbWfdFwsc609r0JbsvVSlXUgo_v.jpg?size=864x1080&quality=96&type=album",
      label: "label 7",
      paragraph: "paragraph 7",
    }
  ]
  return (
    <>
      <Banner slides={mockData}/>
      <NewsSlider slides={mockData}/>
      <EventAnnouncementSlider slides={mockData}/>
      <ForEnrollee />
      <TileBlocks />
    </>
  );
}
 
export default MainPage;