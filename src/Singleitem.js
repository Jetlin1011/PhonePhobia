import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';





function Singleitem() {
    const param= useParams()


    const [mobile,setmobile]= useState([]);

    const getData= async ()=>{

        const result=await fetch('/Data.json')
        result.json().then(i=>setmobile(i.phones))

    }
    const values=mobile.find(i=>param.id==i.id)


useEffect(()=>{

    getData();
    console.log(values)

},[])


  return (
    <div className='me-1'>{
        values?
    <div className='w-100   p-3 align-item-center justify-contents-center '>
        
             
             
            <Row className='w-100 m-2  d-flex  mb-3 mt-5' >
                <Col lg={6} md={6} sm={11} className='m-0 p-0 d-flex  '>
                <img src={values.image} className='w-100' alt="" />
                </Col >
                <Col lg={6} md={6} sm={11} className='m-0 p-0  d-flex align-item-center justify-contents-center'>
                <ListGroup className='bg-light d-flex align-item-center justify-contents-center w-100'  >
      <ListGroup.Item  className='text-center mt-2'>
        <h1 className='text-danger fw-bolder '>{values.model}</h1></ListGroup.Item>
      <ListGroup.Item>Brand: <strong>{values.brand}</strong></ListGroup.Item>
      <ListGroup.Item>Display: <strong>{values.specifications["display"]}</strong></ListGroup.Item>
      <ListGroup.Item>Processor Type: <strong>{values.specifications["processor"]}</strong></ListGroup.Item>
      <ListGroup.Item className='text-center'>
               
      </ListGroup.Item>
      <ListGroup.Item>Camera : <strong>{values.specifications["camera"]}</strong></ListGroup.Item>
      <ListGroup.Item>Battery : <strong>{values.specifications["battery"]}</strong></ListGroup.Item>
      <ListGroup.Item>Storage : <strong>{values.specifications["storage"]}</strong></ListGroup.Item>
      <ListGroup.Item>OS : <strong>{values.specifications["os"]}</strong></ListGroup.Item>
      <ListGroup.Item className='p-4'>  <strong>{values["description"]}</strong></ListGroup.Item>

    </ListGroup>
                </Col>

            </Row>
        
            <Reviews revarr={values.reviews}></Reviews>

    </div> :" "
}
</div>
  )
}

export default Singleitem