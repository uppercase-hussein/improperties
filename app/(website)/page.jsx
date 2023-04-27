import { Inter } from 'next/font/google'
import About from './components/home/About'
import Benefits from './components/home/Benefits'
import BlogSection from './components/home/BlogSection'
import Clients from './components/home/Clients'
import FactVideo from './components/home/FactVideo'
import InterestForm from './components/home/InterestForm'
import PropertiesSection from './components/home/PropertiesSection'
import Services from './components/home/Services'
import Slider from './components/home/Slider'
import Team from './components/home/Team'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
    <Slider/>
     <About/>
     <PropertiesSection/>
     <Services/>
     <Benefits/>
     <InterestForm/>
     <Team/>
     <FactVideo/>
     {/* <Clients/> */}
     <BlogSection/>
    </>
  )
}
