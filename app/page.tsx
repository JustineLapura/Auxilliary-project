
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '@/components/Navbar'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <div className="h-full w-full">
      <Main />
      <Categories />
    </div>
  )
}
