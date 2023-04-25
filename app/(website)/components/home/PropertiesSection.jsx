import client from "@/app/lib/contentful/client";
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
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_80" />
    {/*-============spacing==========-*/}
  </section>
  )
}

export default PropertiesSection