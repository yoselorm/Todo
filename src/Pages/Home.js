import React from 'react';
import UserCard from '../Components/UserCard';

const Home = (props) => {
    console.log(props)

    return (
        <div>
            <br />
            {props.userData.map((users) => {
                return (
                    <div key={users.id}>
                        <UserCard data={users} />
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
