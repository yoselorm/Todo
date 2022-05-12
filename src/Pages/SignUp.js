import React from 'react';
import CreateForm from '../Components/CreateForm';

const SignUp = (props) => {
    return (
        <div>
            <CreateForm addUser={props.addUser} />
        </div>
    );
}

export default SignUp;
