import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePreviewContainer = styled.div`
    flex: 0 0 auto;
`;

const HomePreview2 = () => {
    const [dataArray,setDataArray]=useState([]);
    
    useEffect(()=>{
        const fetchData = async()=> {
            //let url = `${window.location.origin}/`;
            let url = 'http://52.78.109.86:8080/requests/';


            try {
              const response = await axios.get(url);
              const dataArray = response.data.results;
              setDataArray(dataArray);
                console.log(dataArray)
            
            } catch(error){
                console.log(error)
            }
        };
        fetchData();
    });

    return (
        <>
        
            {dataArray.map((post)=>(
                <HomePreviewContainer>
<div key={post.id} style={{ width : '150px', height : '100px', border : '1px solid #BCBCBC', margin : '15px 5px', borderRadius : '10px', display : 'inline-block'}}>
            <img src={post.image1} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius : '10px'}}/>
        </div>
                </HomePreviewContainer>
                
            ))}
    
        </>
    );
}; 

export default HomePreview2;