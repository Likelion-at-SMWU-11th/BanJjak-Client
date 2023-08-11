import React from 'react';
import { Link } from 'react-router-dom';

const MustRead = () => {
    return (
        <div>
            <Link to='/'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/must_read.png'} alt="must_read"/>
            </Link>
        </div>
    );
};

export default MustRead;