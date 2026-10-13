import { menu } from '@/data'
import Link from 'next/link'

const buttonColors: Record<string, string> = {
  red: 'bg-red-500 text-white hover',
  black: 'bg-black text-white hover',
  white: 'bg-white text-black hover',
}



const menuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((category) => (
        <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 bg-cover p-8 md:h-1/2 md:flex-1 bg-center' style={{ backgroundImage: `url(${category.img})` }}>
          <div className={`text-${category.color} w-1/2`}>
            <h1 className='-mt-1 md:mt-0 uppercase font-bold text-xl sm:text-3xl'>
              {category.title}
            </h1>
            <p className='text-sm my-1 sm:my-3'>
              {category.desc}
            </p>
            <button className={`${buttonColors[category.color] ??
              'bg-gray-500 text-white'
              } hidden 2xl:block py-2 px-4 rounded-md transition-colors duration-200`}>Explore</button>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default menuPage
