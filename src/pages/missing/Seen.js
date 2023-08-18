import React from 'react';
import { Link } from 'react-router-dom';
import MissingList2 from '../../components/MissingList2';


function Seen(props) {
    const { selectedSpecies } = props;
    return (
        <div>
            <Link to="/Missing/Seen/WriteSeen">
                <img 
                    src={process.env.PUBLIC_URL + '/assets/icons/floatingwrite.png'} 
                    alt="floatingwrite"
                    style={{position : 'fixed', marginLeft:'310px', marginTop :'400px'}}
                />
            </Link>
            <MissingList2 selectedSpecies={selectedSpecies}/>
        </div>
    );
}

export default Seen;