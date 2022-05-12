import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const CreateForm = (props) => {
    console.log(props)
    const [name, setName] = useState('');
    const [age, SetAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            name: name,
            occupation: occupation,
            age: age,
        }
        props.addUser(newUser);

        setName('');
        setOccupation('');
        SetAge('');

        alert('The user has successfully been added')
    }



    return (
        <div>
            <br />
            <Container>
                <Card style={{ width: '38rem' }}>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control type="text" placeholder="Enter occupation" value={occupation} onChange={(e) => { setOccupation(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e) => { SetAge(e.target.value) }} />
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
