import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContex)
    return (
        <div>
            <h1>Home {user && <p>{user.name}</p>} </h1>
        </div>
    );
};

export default Home;