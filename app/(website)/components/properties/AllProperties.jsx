import client from '@/app/lib/contentful/client'
import React from 'react'
import SingleProperty from './SingleProperty'


const getProperties = async () => {
    const entries = await client.getEntries({
      content_type: 'properties'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  
const AllProperties = async () => {
    const properties = await getProperties()
  return (
    <section className="portfolio-section-one">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row align-items-end">
      <div className="col-lg-6">
        <div className="section_title type_one">
          <h4 className="sm_title">Discover our featured properties</h4>
          <div className="title_whole">
            <h2 className="title"> Find your dream property with IM Properties </h2>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_20" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-6" />
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_20" />
    {/*-============spacing==========-*/}
    <section className="portfolio_v1 portfolio_tabs">
      <div className="portfoliocontainer row">
        {
            properties.map(property=><SingleProperty key={property.sys.id} property={property} />)
        }

      </div>
    </section>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_60" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default AllProperties