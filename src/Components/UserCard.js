import React from 'react';
import { Container, Card } from 'react-bootstrap';

const UserCard = (props) => {

    return (
        <div>
            <Container>
                <br />
                <Card style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title> {props.data.name}</Card.Title>
                        <span>Occupation: {props.data.occupation}</span><br />
                        <span>Age: {props.data.age}</span><br />

                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default UserCard;
