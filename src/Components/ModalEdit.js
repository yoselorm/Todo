import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const ModalEdit = (props) => {

    const navigate = useNavigate();
    const [name, setName] = useState(props.data.name);
    const handlesubmit = (e) => {
        e.preventDefault();
        const modData = {
            name: name,
            id: props.data.id
        }
        props.edit(props.data.id, modData)
        setName("");

    }
    return (
        <div>
            <Card style={{ width: '28rem' }}>
                <Card.Body>
                    <Form onSubmit={handlesubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Edit and Save</Form.Label>
                            <Form.Control type="text" placeholder="Type here" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>

                </Card.Body>
            </Card>
        </div >
    );
}

export default ModalEdit;
