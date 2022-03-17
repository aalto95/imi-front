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
    <section className="w-screen flex">
      {
        blocks.map((block) => (
          <Link to="/" className="w-2/12 h-80 flex justify-center items-center odd:bg-gray-200 even:bg-antique-white">
            <h1 className="text-3xl text-center m-3 text-berlin-blue">{block.name}</h1>
          </Link>
        ))
      }
    </section>
  );
}
 
export default TileBlocks;