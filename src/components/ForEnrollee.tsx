import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

interface ForEnrolleeProps {
  
}
 
const ForEnrollee: FunctionComponent<ForEnrolleeProps> = () => {
  return (
    <div className="flex my-8 flex-col lg:flex-row items-center lg:items-start">
      <div className="lg:w-7/12">
        <h1 className="text-terracota text-xl ml-12 mb-4">АБИТУРИЕНТУ-2022</h1>
        <img src="https://sun9-83.userapi.com/impg/IfI9YKFHmUsD4JgbtZb-ypJkHYQlgTm-7GmqDQ/EUnv3P-8ALY.jpg?size=2560x1920&quality=96&sign=8dda5b4a07127cc8bac6e7af68396ce6&type=album" alt="" />
      </div>
      <div className="lg:w-5/12 lg:px-20 flex flex-col md:flex-row lg:block">
        <div className="flex lg:justify-end mx-2">
          <div className="flex flex-col">
            <Link className="my-2" to="">#Календарь событий</Link>
            <Link className="my-2" to="">#Задать вопрос</Link>
            <Link className="my-2" to="">#Анкета абитуриента</Link>
            <Link className="my-2" to="">#Архив новостей</Link>
          </div>
        </div>
        <div className="flex flex-col lg:mb-20 mx-2">
          <Link className="text-lg lg:text-xl text-terracota my-2" to="">ПРАВИЛА ПРИЕМА</Link>
          <Link className="text-lg lg:text-xl text-terracota my-2" to="">ЛИЧНЫЙ КАБИНЕТ АБИТУРИЕНТА</Link>
          <Link className="text-lg lg:text-xl text-terracota my-2" to="">ПРОГРАММЫ</Link>
          <Link className="text-lg lg:text-xl text-terracota my-2" to="">САЙТ ПРИЕМНОЙ КОМИССИИ</Link>
          <Link className="text-lg lg:text-xl text-terracota my-2" to="">КОНТАКТЫ</Link>
        </div>
        <div className="flex flex-col mx-2">
          <Link className="text-xl lg:text-2xl text-berlin-blue my-2" to="">БАКАЛАВРИАТ</Link>
          <Link className="text-xl lg:text-2xl text-berlin-blue my-2" to="">МАГИСТРАТУРА</Link>
          <Link className="text-xl lg:text-2xl text-berlin-blue my-2" to="">АСПИРАНТУРА</Link>
        </div>
      </div>
    </div>
  );
}
 
export default ForEnrollee;