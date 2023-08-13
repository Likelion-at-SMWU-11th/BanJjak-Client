import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";


//styled components
const UserSelectButton=styled.button`
    flex:1;
    padding: 30px 50px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color: #00AC78;
    border: 1px solid #00AC78;
    border-radius: 20px;
    background: white;

    a {
        color: #00AC78;
        text-decoration: none;
    }
`

const UserSelectButtonForShelter=styled(UserSelectButton)`
    color: white;
    background: #00AC78;
    border: none;
    margin-top: 0.5rem;

    a {
        color: white;
    }
`

// inline css

const pStyle={
    color:"#828282",
    fontSize: "35px",
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:"1.5rem",
    verticalAlign:"bottom"
}

const spanStyle={
    fontWeight: "normal",
    fontSize: "32px"
}


const borderBottomSpan={
    display:"inline-block",
    height:"1.7rem",
    color:"transparent",
    borderBottom:"4px solid #00AC78",
    marginLeft:"1rem",
    marginRight:"1rem"
}

const btnContainer={
    display:"flex",
    alignItems:"center"
}


const UserTypeSelect = () => {
    return (
        <>
            <p style={pStyle}>저는<span style={borderBottomSpan}>보호소관</span>입니다</p>
            <div style={btnContainer}>
                <UserSelectButton><Link to="/Login/ForCommon"><span style={spanStyle}>(예비) </span>반려인</Link></UserSelectButton>
            </div>
            <div style={btnContainer}>
                <UserSelectButtonForShelter><Link to="/Login/ForShelter">보호소 관리자</Link></UserSelectButtonForShelter>
            </div>
        </>
    );
};

export default UserTypeSelect;
export { UserSelectButtonForShelter };