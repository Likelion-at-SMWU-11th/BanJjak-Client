import React from 'react';


const Dropdown = ({value, setAnimalValue, setIsOpen, isOpen}) => {
    const ValueClick=()=>{
        setAnimalValue(value)
        setIsOpen(!isOpen)
    }
    return (
        <li onClick={ValueClick}>
            {value}
        </li>
    );
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