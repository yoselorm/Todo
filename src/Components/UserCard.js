import React from 'react';
import { useState } from 'react';
import { Container, Card, Button, Modal, Form } from 'react-bootstrap';
import ModalEdit from './ModalEdit';

const UserCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = (e) => {
        e.preventDefault();
        props.delete(props.users.id)
    }
    return (
        <div >
            <Container>
                <br />
                <Card style={{ width: '35rem' }} className='card'>
                    <Card.Body className='content'>
                        <Card.Title > {props.users.name}</Card.Title>
                        <div className='debtn'>
                            <Form.Group className="mb-0" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group>
                            <Button className='buttonn' variant="primary" onClick={handleShow}>📝</Button>
                            <Button className='buttonn' variant="danger" onClick={handleDelete}>⛔</Button>
                        </div>

                    </Card.Body>
                </Card>

            </Container>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body><ModalEdit data={props.users} edit={props.edit} /></Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserCard;
