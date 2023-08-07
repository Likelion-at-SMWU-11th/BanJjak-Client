import React from 'react';
import '../css/FAQ.css'

//자주 묻는 질문 컴포넌트

const Question = (props) => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assets/icons/question.png'} id="question" alt="question"/>
            <p id="contents">{props.contents}</p>
            <hr id="hr2"/>
        </div>
    );
};

export default Question;