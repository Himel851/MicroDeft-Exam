import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import demoPic from '../../images/show.jpg'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import { Link } from "react-router-dom";


const Main = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://microdeft.rifatewu.com/products")
            .then(response => setProducts(response.data))
    }, [])

    const searchItem = products.filter((filterValue) => {
        if (search === "") {
            return filterValue; //return all value
        } else if (
            filterValue.name.toLowerCase().includes(search.toLowerCase()) ||
            filterValue.meta_title.toLowerCase().includes(search.toLowerCase())
        ) {
            return filterValue;
        }
    });


    return (
        <div>
            {/* Search */}
            <div>
                <h1>Product List</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className='w-50' onChange={(e) => {
                            setSearch(e.target.value);
                        }} type="email" placeholder="Filter Products...." />
                    </Form.Group>
                </Form>
            </div>


            {/* APi Call */}
            <div>

                <Container>
                    <Row>
                    {
                        searchItem.map((products) => (
                            <Col xs={6} key={products.product_id}>
                                <Link to={`/product/${products.product_id}`}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={products.image} />
                                        <Card.Body>
                                            <Card.Text>
                                                {products.name}
                                            </Card.Text>
                                            <div>
                                                <AiFillEdit className='icon' />
                                                <AiFillDelete className='icon' />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>

                            </Col>

                        ))
                    }

                    </Row>
                </Container>
                
                
            </div>
        </div>
    )
}

export default Main