import React from 'react';

const EachList = () => {
    return (
        <div>
            <Container>
                <br />
                <Card style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title> {props.data.name}</Card.Title>
                        <span>Occupation: {props.data.occupation}</span><br />
                        <span>Age: {props.data.age}</span><br />
                        <Button variant="primary">Edit</Button>{' '}
                        <Button variant="danger">Delete</Button>{' '}

                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default EachList;
