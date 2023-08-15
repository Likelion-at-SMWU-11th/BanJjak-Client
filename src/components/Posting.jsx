import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"
import useDetectClose from '../hooks/useDetectClose';
import Dropdown from './Dropdown';
import {Dropdown2,Dropdown3} from './Dropdown';
import Tags from './Tags';
import PostingModal from './PostingModal';

const formStyle={
    padding: "1rem",
    boxSizing:"content-box",
    display:"flex",
    flexDirection:"column"
}

const InputDiv=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

    label {
        font-size: 38px;
        font-weight: 600;
    }

    input {
        display: block;
        margin-top: 0.5rem;
        border-radius: 5px;
        border: 1px solid #000;
        font-size: 30px;
        font-weight: 300;
        padding: 0.5rem
    }
`

const TagDiv=styled(InputDiv)`
    label {
        font-size: 36px;
        font-weight: 600;
        line-height: normal;
    }
`

const TextDiv=styled(InputDiv)`
    label {
        font-size: 36px;
        font-weight: 600;
        line-height: normal;
    }

    textarea {
        height: 7rem;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 30px;
        font-weight: 300;
        line-height: normal;
    }
`

const ImgInputDiv=styled(InputDiv)`
    div {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        
    }

    img {
        width: 5rem;
    }
`

const RowDiv=styled(InputDiv)`
    flex-direction: row;
    justify-content: space-between;

    div {
        width: 45%;
    }

    & > div#textDiv {
       display: flex;
       flex-direction: column;
   }

   & > div#dropdownDiv {

       ul {
        font-size: 30px;
        font-weight: 300;
        padding: 0.5rem;
        border: 1px solid black;
        border-radius: 5px;
        color: #828282;
        
       }
    
       ul:hover {
           cursor: pointer;
       }

       li:hover {
           color: #00AC78;
       }

    }

`
const DropdownInput = styled.input`
    width: 100%; /* input의 너비를 100%로 설정 */
    background: white;
    text-align: left;
    padding: 0.5rem;

    &:hover {
        cursor: pointer;
    }
`;

const SubmitDiv=styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        height: 4rem;
        text-align: center;
        border-radius: 5px;
        border: 2px solid #00AC78;
        font-size: 30px;
        font-weight: 600;
        background: white;
        padding: 0.5rem;
    }

    button > a {
        color: #00AC78;
        text-decoration: none;
    }

    input {
        height: 4rem;
        color: white;
        font-size: 38px;
        font-weight: 600;
        text-align: center;
        border-radius: 5px;
        border: none;
        background: #00AC78;
        padding: 1rem 2rem;
    }

`

const ImgContainer=styled.div`
    background: pink;
`

const smallFont={
    fontSize: "30px"
}

const ImgDiv={
    display: "flex",
    alignItems:"center",
    flexDirection:"row",
    background:"gray"
}

const Posting = () => {

    // dropdown 관련
    const dropDownRefs = {
        animal: useRef(),
        sex: useRef(),
        neutered: useRef(),
      };

    const [animalValue, setAnimalValue]=useState('')
    const [sexValue, setSexValue]=useState('')
    const [neuteredValue, setNeuteredValue]=useState('')

    const animalList=['개','고양이','기타']
    const sexList=['수컷','암컷','미확인']
    const neuteredList=['중성화 O','중성화 X','미확인']

    const [isOpen,setIsOpen]=useDetectClose(dropDownRefs.animal,false)
    const [isOpen2,setIsOpen2]=useDetectClose(dropDownRefs.sex,false)
    const [isOpen3,setIsOpen3]=useDetectClose(dropDownRefs.neutered,false)


    // Modal 관련
    const [modalOpen, setModalOpen] = useState(false);  // 모달창 노출 여부 state
    const showModal = () => {
        //모달창 노출
        setModalOpen(true);
    };

    return (
        <>
            <form style={formStyle}>
                <InputDiv>
                    <label>공고 동물 이름</label>
                    <input type="text" placeholder="동물의 이름을 적어주세요."></input>
                </InputDiv>
                <ImgInputDiv>
                    <label>공고동물 사진 <span style={smallFont}>(최대 3장)</span></label>
                    <div style={ImgDiv}>
                        <ImgContainer>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/icons/editphoto.png"}
                                alt="editphoto"
                            />
                        </ImgContainer>
                        <ImgContainer>
                        
                        </ImgContainer>
                        <img
                        src={process.env.PUBLIC_URL + "/assets/icons/editphoto.png"}
                        alt="editphoto"
                        />
                        <img
                        src={process.env.PUBLIC_URL + "/assets/icons/editphoto.png"}
                        alt="editphoto"
                        />
                    </div>
                </ImgInputDiv>
                <RowDiv>
                        <div ref={dropDownRefs.animal} id="dropdownDiv">
                            <label>동물</label>
                            <DropdownInput onClick={() => setIsOpen(!isOpen)} type='input' value={animalValue || (isOpen ? animalValue : '선택')}/>
                            {isOpen && 
                                <ul>
                                {animalList.map((value, index) => (
                                  <Dropdown
                                    key={index}
                                    value={value}
                                    setIsOpen={setIsOpen}
                                    setAnimalValue={setAnimalValue}
                                    isOpen={isOpen}
                                  />
                                ))}
                              </ul>
                            }
                        </div>
                    <div id="textDiv">
                        <label>종</label>
                        <input type="text" placeholder="미확인"/>
                    </div>
                </RowDiv>

                <RowDiv>
                    <div id="textDiv">
                        <label>몸무게</label>
                        <input type="text" placeholder="미확인"/>
                    </div>
                    <div id="textDiv">
                        <label>나이</label>
                        <input type="text" placeholder="미확인"/>
                    </div>
                </RowDiv>

                <RowDiv>
                        <div ref={dropDownRefs.sex} id="dropdownDiv">
                            <label>성별</label>
                            <DropdownInput onClick={() => setIsOpen2(!isOpen2)} type='input' value={sexValue || (isOpen2 ? sexValue : '선택')}/>
                            {isOpen2 && 
                                <ul>
                                {sexList.map((value, index) => (
                                  <Dropdown2
                                    key={index}
                                    value={value}
                                    setIsOpen2={setIsOpen2}
                                    setSexValue={setSexValue}
                                    isOpen2={isOpen2}
                                  />
                                ))}
                              </ul>
                            }
                        </div>
                        <div ref={dropDownRefs.neutered} id="dropdownDiv">
                            <label>중성화</label>
                            <DropdownInput onClick={() => setIsOpen3(!isOpen3)} type='input' value={neuteredValue || (isOpen3 ? neuteredValue : '선택')}/>
                            {isOpen3 && 
                                <ul>
                                {neuteredList.map((value, index) => (
                                  <Dropdown3
                                    key={index}
                                    value={value}
                                    setIsOpen3={setIsOpen3}
                                    setNeuteredValue={setNeuteredValue}
                                    isOpen3={isOpen3}
                                  />
                                ))}
                              </ul>
                            }
                        </div>
                </RowDiv>
                <TagDiv>
                    <label>동물을 나타내는 단어를 선택해 주세요. <span style={smallFont}>(최대 5개)</span></label>
                    {/* 해시태그 부분 */}
                    <Tags/>
                </TagDiv>
                <TextDiv>
                    <label>관리자 한 마디 <span style={smallFont}>(최대 70자)</span></label>
                    <textarea placeholder="동물에 관한 한마디를 적어주세요." required></textarea>
                </TextDiv>
                <TextDiv>
                    <label>특이사항</label>
                    <textarea placeholder="입양자가 알아야 할 특이사항을 알려주세요."></textarea>
                </TextDiv>
                <SubmitDiv>
                    <button><Link>미리 보기</Link></button>
                    <input type="button" value="작성 완료" onClick={showModal}/>
                    {modalOpen && <PostingModal setModalOpen={setModalOpen} />}
                </SubmitDiv>
            </form>

        </>
    );
};

export default Posting;