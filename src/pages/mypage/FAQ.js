import React, { useState } from 'react';
import '../../css/FAQ.css';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Question from '../../components/Question';
import MailModal from '../../components/MailModal';

function FAQ() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Banner/>
            <div id="title">
            <p>자주 묻는 질문</p>
            </div>

            <div style={{overflowX : 'hidden', overflowY: 'auto', height :'670px'}}>
            <Question contents="유기동물 입양 방법을 알려주세요!"/>
            <Question contents="내가 잃어버린 동물이 입양되었다면 어떻게 하나요?"/>
            <Question contents="유기동물 입양은 무료인가요?"/>
            <Question contents="오픈채팅 주소가 올바르지 않아요."/>
            <Question contents="미성년자도 입양이 가능한가요?"/>
            <Question contents="보호소에서 전화를 받지 않아요."/>

            <div id="help">
                <h2 id="h2">도움말을 통해<br/>문제를 해결하지 못하셨나요?</h2>

                <div id="solvingbtn">
                    <Link to="https://open.kakao.com/o/gdi0MYyf">
                    <img src={process.env.PUBLIC_URL + '/assets/icons/inquiry.png'} id="inquiry" alt="inquiry"/>
                    <div id="solve">
                        <h4 id="h4">문의하기</h4>
                        <p id="p1">상담원과 실시간으로 상담할 수 있어요.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="more1" alt="more"/>
                    </Link>
                </div>

                <br/>

                <div id="solvingbtn" onClick={openModal}>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/mail.png'} id="mail" alt="mail"/>
                    <div id="solve">
                        <h4 id="h4">간편메일</h4>
                        <p id="p1">간편하게 메일로 답변을 받을 수 있어요.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/more.png'} id="more2" alt="more"/>
                </div>
            </div></div>
            {isModalOpen && <MailModal isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
}

export default FAQ;