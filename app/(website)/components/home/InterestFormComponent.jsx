'use client'
import { displayAmount } from '@/app/utils/helpers'
import React, {useState} from 'react'

const InterestFormComponent = () => {
    const [formdata, setFormdata] = useState({
        budget: 4500000,
    })
  return (
    <form method="post" action="#">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <label>Full Name <span>*</span></label>
                        <input type="text" name="name" placeholder="" required />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label>Phone  <span className="wpforms-required-label">*</span></label>
                        <input type="text" name="phone" placeholder="" required/>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder=""  />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label>Preferred Location</label>
                        <input type="text" name="location" placeholder=""  />
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <label>Property Type</label>
                        <select>
                          <option value="land">Land</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                        </select>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label>Purpose of Property</label>
                        <select>
                          <option value="investment">Investment</option>
                          <option value="personal">Personal Use</option>
                          <option value="rental">Rental Income</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                      <div className="col-lg-12 col-sm-12 ">
                        <label>Budget</label>
                        <input style={{width:"100%"}} type="range" name="range" defaultValue={formdata.budget} value={formdata.budget} min={100000} max={99999999} step={100000} onChange={e=>setFormdata(prev=>({...prev, budget:e.target.value}))} />
                        <div className="slider-hint">Selected Budget: <b>{displayAmount(formdata.budget)}</b>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12 mt-3">
                        <label>Requirement or Request</label>
                        <textarea name="message" placeholder="Any specific requirements or preferences (e.g., waterfront, gated community, number of bedrooms/bathrooms, parking)" style={{maxHeight:150}}></textarea>

                        </div>
                      <div className="col-lg-12 col-sm-12  text-md-end">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
  )
}

export default InterestFormComponent