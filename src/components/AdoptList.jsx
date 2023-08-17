import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Missing.css';

const AdoptList = () => {

    const [dataArray,setDataArray]=useState([]);
    
    useEffect(()=>{
        const fetchData = async()=> {
            try {
                const response=await axios.get('http://127.0.0.1:8000/posts/');
                const dataArray = response.data.results; // 서버에서 받아온 데이터를 그대로 사용
                setDataArray(dataArray);
            } catch(error){
                console.log(error)
            }
        };
        fetchData();
    },[]);
    
    return (
        <>
         {dataArray.map((post) => (
                <div key={post.id}  id="al_list">
                    {/* 포스트 아이템을 렌더링하는 코드 작성 */}
                    {/* 예시: */}
                    {/* <Link to={`/Adoption/AdoptDetail/${post.id}`} style={{ textDecoration: 'none' }}> */}
                        <div id="al_container">
                            <img src={post.image1} id="al_photo" alt="animalphoto" />
                            <p id="main">
                                <span>{post.animal_type}</span>&nbsp;
                                <span>{post.kind}</span>&nbsp;
                                <span>({post.gender})</span>
                            </p>
                            <p id="sub">
                                <span>{post.is_neutered}, </span>
                                <span>{post.age}, </span>
                                <span>{post.weight}, </span>
                                <span>{post.writer_username}</span>
                            </p>
                        </div>
                    {/* </Link> */}
                </div>
            ))}
        </>
    );
};

export default AdoptList;