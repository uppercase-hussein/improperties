'use client'
import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Country, State, City }  from 'country-state-city';
import axios from "@/app/lib/axios";
import { showAlert } from "@/app/utils/helpers";


const InterestFormModal = ({show, close, propertyName = null, id = null, properties}) => {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        country: "NG",
        state: "",
        city: "",
        address: "",
        propertyName: propertyName,
        propertyPrice:0,
        TotalPrice:0,
        quantity:"",
        installments:1

    })
    const [errors, setErrors] = useState(null)


    useEffect(() => {
        if(formdata.propertyName){
            let property = properties.find(property => property.fields.name === formdata.propertyName)
            setFormdata((prev) => ({
                ...prev,
                propertyPrice: property.fields.price,
                TotalPrice: property.fields.price * Number(formdata.quantity)
              }));
        }
    },[formdata.propertyName])

    const [loading, setLoading] = useState(false)
    
    const handleChange = (field, value) => {
        if(field === "quantity"){
            return setFormdata((prev) => ({
                ...prev,
                [field]:Number(value),
                TotalPrice: formdata.propertyPrice * Number(value)
              }));
        }
       
       return setFormdata((prev) => ({
          ...prev,
          [field]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formdata.name || !formdata.email || !formdata.phone) {
            setErrors("Please fill all required fields")
            return
        }
        setLoading(true);
        let resp = await axios.post("/interest", formdata);
        if(resp.status === 200){
            showAlert({
                title: "Thank you!",
                msg: "Your interest has been submitted successfully. We will get back to you shortly.",
                icon: "success",
                btnText: "Close",
              });
            close()
        }
        setLoading(false);
      }
      const showError = (errors) => {
        if(errors){
            return showAlert({
                title: "Error!",
                msg: errors.toString(),
                icon: "error",
                btnText: "Close",
              });
        }
      }
    
      useEffect(() => {
        if(errors) showError(errors)
      }, [errors])
    
  return (
    <Modal
      show={show}
      onHide={close}
      //   backdrop="static"
      keyboard={false}
      size={"lg"}
      centered
    >
         <Form  onSubmit={handleSubmit}  >
      <Modal.Header>
        <Modal.Title style={{fontSize:18, fontWeight:"bold"}}>Indicate interest in {!formdata.propertyName?"any of our property":formdata.propertyName} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
       
       
             <Form.Group className="mb-3" controlId="formProperty">
                <Form.Label>Property</Form.Label>
                <Form.Select
                onChange={(e) => handleChange("propertyName", e.target.value)}
                value={formdata.propertyName}
                disabled={!formdata.propertyName?false:true}
                >
                    <option value="">Select Property</option>
                    {properties.map((property, index) => (
                        <option key={`prop-${index}`} value={property.fields.name}>{property.fields.name}</option>
                    ))}
                </Form.Select>
          </Form.Group>

            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Quantity (per m<sup>2</sup>)</Form.Label>
                <Form.Control
              type="number"
              onChange={(e) => handleChange("quantity", e.target.value)}
              value={formdata.quantity}
            />
          </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formProperty">
                <Form.Label>installment Plan</Form.Label>
                <Form.Select
                onChange={(e) => handleChange("installments", e.target.value)}
                value={formdata.installments}
                >
                   <option value={1}>Outright Payment</option>
                    <option value={3}>3 Months</option>
                    <option value={6}>6 Months</option>
                    <option value={12}>12 Months</option>
                </Form.Select>
          </Form.Group>
                </Col>
            </Row>
            <hr/>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("name", e.target.value)}
              value={formdata.name}
            />
          </Form.Group>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
              value={formdata.email}
            />
          </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("phone", e.target.value)}
              value={formdata.phone}
            />
            </Form.Group>
            </Col>
          </Row>
          
       
         

            <Row>
                <Col>
                <Form.Label>Country</Form.Label>
                <Form.Select
                onChange={(e) =>handleChange("country", e.target.value)}
                value={formdata.country}
                >
                    <option value="">Select Country</option>
                    {Country.getAllCountries().map((country, index) => (
                        <option key={index} value={country.isoCode}>{country.name}</option>
                    ))}
                </Form.Select>
                </Col>
                <Col>
                <Form.Label>State</Form.Label>
                <Form.Select
                onChange={(e) => handleChange("state", e.target.value)}
                value={formdata.state}
                >
                    <option value="">Select State</option>
                    {State.getStatesOfCountry(formdata.country).map((state, index) => (
                        <option key={index} value={state.isoCode}>{state.name}</option>
                    ))}
                </Form.Select>
                </Col>
                <Col>
                <Form.Label>City</Form.Label>
                <Form.Select
                onChange={(e) => handleChange("city", e.target.value)}
                value={formdata.city}
                >
                    <option value="">Select City</option>
                    {City.getCitiesOfState(formdata.country, formdata.state).map((city, index) => (
                        <option key={index} value={city.name}>{city.name}</option>
                    ))}
                </Form.Select>
                </Col>
            </Row>
          
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
            style={{maxHeight:100}}
                as="textarea"
              cols={2}
              onChange={(e) => handleChange("address", e.target.value)}
              value={formdata.address}
            />
          </Form.Group>
         

       
      </Modal.Body>

      <Modal.Footer>
        <Button
        className="btn btn-default"
          style={{width:"45%"}}
          onClick={()=>close()}
        >
          Close
        </Button>
        <Button
          type="submit"
          style={{width:"45%"}}
          disabled={loading}
        >
          {loading ? "Saving..." : "Submit"}
        </Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default InterestFormModal