import React, { useState } from 'react';
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";


const SelectAnimal = () => {

    const animalList=[
        {value:"dog", label:"개"},
        {value:"cat", label:"고양이"},
        {value:"etc", label:"기타"}
    ]

    const[selected, setSelected]=useState(null);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log(`Option selected:`, selectedOption);
      };

    return (
        <div className="container">
            <div className="mt-5 m-auto w-50">
            <Select
            options={animalList}
            onChange={handleChange}
            defaultValue={animalList[0]}
            
        />
            </div>
        </div>
        
    );
};

export default SelectAnimal;