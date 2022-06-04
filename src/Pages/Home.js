import React from 'react';
import UserCard from '../Components/UserCard';

const Home = (props) => {


    return (
        <div>
            <br />
            {props.userData.map((users) => {
                return (
                    <div key={users.id}>
                        <UserCard users={users} delete={props.delete} edit={props.edit} />
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
