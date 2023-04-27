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
import client from "@/app/lib/contentful/client";

const getSlides = async () => {
    const entries = await client.getEntries({
      content_type: 'homeSlider'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

export default async function HomePage() {
  const slides = await getSlides();
  return (
    <>
    <Slider slides={slides}/>
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
