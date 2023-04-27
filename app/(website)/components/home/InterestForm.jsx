import React from 'react'
import InterestFormComponent from './InterestFormComponent'

const InterestForm = () => {
  return (
   <section className="form-section mt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section_title text-center type_one">
          <h4 className="sm_title"> What type of property are you interested in?</h4>
          <div className="title_whole">
            <h2 className="title"> Let Us Know What You Have In Mind</h2>
          </div>
        </div>
      </div>
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_40" />
    {/*-============spacing==========-*/}
    <div className="row">
      <div className="col-lg-12">
        <section className="fom_tab_box custom_tabs type_four">
          <div className="s_tabs_content tab-content">
            <div className="tab-pane  active" id="threetab1" role="tabpanel" aria-labelledby="threetab1-cartab">
              <div className="contentbox  yes_image d-flex ">
                <div className="contact_form_shortcode">
                  <InterestFormComponent/>
                </div>
                <div className="image trans">
                  <img src="assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_90" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default InterestForm