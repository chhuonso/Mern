import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to={"/"}><h5>Main Page</h5></Link>
        </div>
    )
}

export default Home