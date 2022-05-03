export const Footer = () => {
  return (
    <footer className="flex justify-between p-4 md:p-7 xl:p-10 bg-berlin-blue">
      <div>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white mb-4">г. Якутск, ул. Кулаковского, 48, каб. 437</p>
        <a href="tel:+74112496834" className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white">+7 (4112) 49-68-34</a>
      </div>
      <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white text-right">2022 Институт математики и информатики</p>
    </footer>
  )
}