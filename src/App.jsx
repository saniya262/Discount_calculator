
import './App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    originalPrice: 0,
    discountPercentage: 0,
  });
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [savedAmount, setSavedAmount] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const calculateDiscount = (e) => {
    e.preventDefault();
    const discountAmount = (formData.originalPrice * formData.discountPercentage) / 100;
    setDiscountedPrice(formData.originalPrice - discountAmount);
    setSavedAmount(discountAmount);
  };

  const reset = () => {
    setFormData({
      originalPrice: 0,
      discountPercentage: 0,
    });
    setDiscountedPrice(0);
    setSavedAmount(0);
  };

  return (
    <>
      <div>
        <Row className='mt-5 w-75' style={{ marginLeft: "200px", height: "600px" }}>
          <Col xs={{ order: 2 }}></Col>
          <Col style={{ backgroundColor: "white", borderRadius: "18px" }} xs={{ order: 4 }}>
            <div style={{ backgroundColor: "#2D82B5", marginInline: "-13px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px" }}>
              <h3 className='text-center py-2  text-light '>% Calculator</h3>
            </div>

        

            <Form onSubmit={calculateDiscount}>
              <Form.Group className="mb-3 mx-4" controlId="exampleForm.ControlInput1">
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <label htmlFor="" className='fw-bolder'>Original Price</label>
                  <Form.Control
                    type="number"
                    className='priceinput'
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    style={{ width: "90px", backgroundColor: "#2D82B5", color: "white" }}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3 mx-4" controlId="exampleForm.ControlInput1">
                <div className='d-flex justify-content-between align-items-center'>
                  <label htmlFor="" className='fw-bolder'>Discount in %:</label>
                  <Form.Control
                    className='disinput'
                    type="number"
                    name="discountPercentage"
                    value={formData.discountPercentage}
                    onChange={handleInputChange}
                    style={{ width: "90px", backgroundColor: "#2D82B5", color: "white" }}
                  />
                </div>
              </Form.Group>

              <div style={{ paddingBottom: "10px", display: "flex", justifyContent: "center", marginTop: "40px" }}>
                <Button variant="success" type="submit">Calculate</Button>{' '}
              </div>
            </Form>

            <div style={{ backgroundColor: "#2D82B5",marginTop:"60px", width: "80%", marginLeft: "10%", borderRadius: "6px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div className="container">
    <div className="row mb-3 ">
    <div className="col-6 d-flex align-items-center justify-content-end">
        <h4 className="text-light">You Save:</h4>
      </div>
      <div className="col-6 d-flex align-items-center justify-content-center">
        <p className="text-light ">&#x20B9;{savedAmount.toFixed(2)}</p>
      </div>
      
    </div>
    <div className="row">
    <div className="col-6 d-flex align-items-center justify-content-end">
        <h4 className="text-light">Price:</h4>
      </div>
      <div className="col-6 d-flex align-items-center justify-content-center">
        <p className="text-light">&#x20B9;{discountedPrice.toFixed(2)}</p>
      </div>
    
<div style={{ paddingBottom: "0px", display: "flex", justifyContent: "end", marginTop: "10px" }}>
              <Button variant="light" onClick={reset}><img src="https://freeiconshop.com/wp-content/uploads/edd/refresh-flat.png" width={20} alt="" /></Button>{' '}
            </div>
    </div>
  </div>
</div>


            
           
            <hr style={{ border: 'none', borderTop: '4px solid black', width: '60%', margin: '20px auto', marginTop: "91px" }} />


          </Col>
          <Col xs={{ order: 4 }}></Col>
        </Row>
      </div>
    </>
  );
}

export default App;
