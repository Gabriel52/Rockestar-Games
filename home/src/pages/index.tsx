import { Inter } from '@next/font/google'
import { HomeScreen } from '@src/modules/HomeScreen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeScreen/>
    </>
  )
}
