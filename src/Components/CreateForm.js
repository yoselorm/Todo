import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const CreateForm = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            name: name,
            id: uuidv4(),
        }
        props.addUser(newUser);

        setName('');
        navigate('/')

        // alert('Added successfully')
    }

    return (
        <div >
            <br />
            <Container>
                <Card style={{ width: '38rem' }} className="addcard">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>My TodoList</Form.Label>
                                <Form.Control type="text" placeholder="Type here" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
}

export default CreateForm;
