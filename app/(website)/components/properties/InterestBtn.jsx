'use client'

import { useState } from "react"
import InterestFormModal from "../modals/InterestFormModal"

const InterestBtn = ({propertyName, id, properties, text = "Express Interest Now"}) => {
    const [show, setShow] = useState(false)
  return (
    <div className="theme_btn_all text-center mt-3">
    <button className="theme_btn rotate big" onClick={()=>setShow(true)}>
        {text}
    </button>
    <InterestFormModal id={id} propertyName={propertyName} properties={properties} show={show} close={()=>setShow(false)} />
  </div>
  )
}

export default InterestBtn