import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Phones.css'
import { Link } from 'react-router-dom';



function Phones() {

    const [phones, setphones] = useState([])

    const getData = async () => {
        const result = await fetch('/Data.json')
        result.json().then(i => setphones(i.phones.sort((a,b)=>b.release_year-a.release_year)))
    }

    useEffect(() => {
        getData();
    }, [])
    console.log(phones)

    return (

        <div className='phonediv d-flex align-items-center justify-content-center w-100 container-lg p-1  m-0 ' id='model'>
            <Row className='container-lg w-100 text-center d-flex align-items-center justify-content-center m-0  '>

                {phones.map(i => (
                    <Col lg={4} md={4} sm={6} className='d-flex align-items-center  justify-content-center mt-5'>

                        <Card style={{ width: '19rem' }}>
                            <Card.Img className='' style={{ height: '12.5rem' }} variant="top" src={i.image} />
                            <Card.Body>
                                <Card.Title className='text-white'>{i.model}</Card.Title>
                                <Card.Text>
                                    {i.brand}
                                </Card.Text>
                                <Card.Text>Released in : {i.release_year}
                                </Card.Text>
                                <Button variant="primary">
                                    <Link style={{textDecoration:'none', color:"white"}} to={`/phone/${i.id}`}>know more</Link>
                                    </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}



            </Row>


        </div>
    )
}

export default Phones