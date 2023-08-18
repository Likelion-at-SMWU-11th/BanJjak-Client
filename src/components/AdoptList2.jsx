import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Missing.css';

const AdoptList2 = ({selectedSpecies}) => {

    const [dataArray,setDataArray]=useState([]);
    
    useEffect(()=>{
        const fetchData = async()=> {
            let url = 'http://52.78.109.86:8080/userposts/';

            if (selectedSpecies === '개') {
              url += '?animal_type=dog';
            } else if (selectedSpecies === '고양이') {
              url += '?animal_type=cat';
            } else if (selectedSpecies === '기타') {
              url += '?animal_type=etc';
            }
        
            try {
              const response = await axios.get(url);
              const dataArray = response.data.results;
              setDataArray(dataArray);
            
            } catch(error){
                console.log(error)
            }
        };
        fetchData();
    },[selectedSpecies]);
    
    return (
        <>
         {dataArray.map((post) => (
                <div key={post.id}  id="al_list">
                    {/* 포스트 아이템을 렌더링하는 코드 작성 */}
                    {/* 예시: */}
                    <Link to={`/Adoption/AdoptDetail2/${post.id}`} style={{ textDecoration: 'none' }}>
                        <div id="al_container">
                            <img src={post.image1} id="al_photo" alt="animalphoto" />
                            <p id="main">
                            {post.animal_type === 'dog' ? <span>개</span> : post.animal_type === 'cat' ? <span>고양이</span> : <span>기타</span>}&nbsp;
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
                    </Link>
                </div>
            ))}
        </>
    );
};

export default AdoptList2;