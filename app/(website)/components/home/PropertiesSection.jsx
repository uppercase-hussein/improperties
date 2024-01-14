import client from "@/app/lib/contentful/client";
import Link from "next/link";
import InterestBtn from "../properties/InterestBtn";
import SinglePropertySec from "./SinglePropertySec";


const getProperties = async () => {
    const entries = await client.getEntries({
      content_type: 'properties'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

const PropertiesSection = async () => {
    let properties = await getProperties()
  
  return (
    <section className="team-section">
    {/*-============spacing==========-*/}
    <div className="pd_top_80" />
    {/*-============spacing==========-*/}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section_title text-center type_one">
            <h4 className="sm_title"> Our Properties</h4>
            <div className="title_whole">
              <h2 className="title">Find Your Dream Property Today!</h2>
            </div>
          </div>
        </div>
      </div>
      {/*-============spacing==========-*/}
      <div className="pd_bottom_40" />
      {/*-============spacing==========-*/}
      <div className="row">
        <SinglePropertySec properties={properties} />
      </div>
   
<div className="d-flex items-center justify-content-center flex-wrap">
      <div className="theme_btn_all text-center mt-3 mx-3">
              <Link href="/our-properties" className="theme_btn rotate big">
                See More Properties
              </Link>
            </div>
      <InterestBtn properties={properties} text="Property interests form" className="mr-3" />
      </div>
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_80" />
    {/*-============spacing==========-*/}
  </section>
  )
}

export default PropertiesSection