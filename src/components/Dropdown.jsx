import React from 'react';


const Dropdown = ({value, setAnimalValue, setIsOpen1, isOpen1}) => {
    // const ValueClick=()=>{
    //     setAnimalValue(value)
    //     setIsOpen(!isOpen)
    // }
    // return (
    //     <li onClick={ValueClick}>
    //         {value}
    //     </li>
    // );
    const handleItemClick = () => {
        setIsOpen1(false); // 드롭다운 닫기
        setAnimalValue(value); // 선택된 값을 상태에 설정
      };
    
      return <li onClick={handleItemClick}>{value}</li>;
    
};

const Dropdown2 = ({value, setSexValue, setIsOpen2, isOpen2}) => {
    const ValueClick=()=>{
        setSexValue(value)
        setIsOpen2(!isOpen2)
    }
    return (
        <li onClick={ValueClick}>
            {value}
        </li>
    );
};

const Dropdown3 = ({value, setNeuteredValue, setIsOpen3, isOpen3}) => {
    const ValueClick=()=>{
        setNeuteredValue(value)
        setIsOpen3(!isOpen3)
    }
    return (
        <li onClick={ValueClick}>
            {value}
        </li>
    );
};

export default Dropdown;
export {Dropdown2, Dropdown3};