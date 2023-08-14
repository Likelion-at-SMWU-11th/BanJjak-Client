import React from 'react';
import '../css/FAQ.css';
import { Link } from 'react-router-dom';

//자주 묻는 질문 컴포넌트

const Question = (props) => {
    return (
        <>
        <Link to="/MyPage/FAQ/FaqDetail" style={{ textDecoration: 'none' }}>
        <div>
            <img src={process.env.PUBLIC_URL + '/assets/icons/question.png'} id="question" alt="question"/>
            <p id="contents">{props.contents}</p>
            <hr id="hr2"/>
        </div>
        </Link>
        </>
    );
};

export default Question;