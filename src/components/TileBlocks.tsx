import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'

interface TileBlocksProps {
  
}
 
const TileBlocks: FunctionComponent<TileBlocksProps> = () => {
  const [blocks] = useState([
    {
      name: 'СТИПЕНДИИ ГРАНТЫ',
      icon: ''
    },
    {
      name: 'НАУКА',
      icon: ''
    },
    {
      name: 'ПРОГРАММЫ',
      icon: ''
    },
    {
      name: 'ВОПРОСЫ-ОТВЕТЫ',
      icon: ''
    },
    {
      name: 'КРУЖКИ ФАКУЛЬТАТИВЫ',
      icon: ''
    },
    {
      name: 'КАРТА ВОЗМОЖНОСТЕЙ',
      icon: ''
    },
  ])
  return (
    <section className="w-screen flex flex-wrap">
      {
        blocks.map((block) => (
          <Link to="/" className="w-6/12 sm:w-4/12 lg:w-2/12 h-36 md:h-48 lg:h-64 xl:h-80 flex justify-center items-center odd:bg-gray-200 even:bg-antique-white hover:opacity-50" key={block.name}>
            <h1 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-center m-3 text-berlin-blue">{block.name}</h1>
          </Link>
        ))
      }
    </section>
  );
}
 
export default TileBlocks;