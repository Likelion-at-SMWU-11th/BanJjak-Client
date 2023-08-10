import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div>
            <Link to='/'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/chat.png'} alt="chat"/>
            </Link>
        </div>
    );
};

export default Chat;