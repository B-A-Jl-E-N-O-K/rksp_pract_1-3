import React from 'react';
import { Link } from 'react-router-dom';

const Securities = ({id, strId, name, price}) => {
    return (
        
        <div className="table-row">
            <div className="table-data"><p>{id}</p></div>
            <div className="table-data"><p>{strId}</p></div>
            <div className="table-data"><p>{name}</p></div>
            <div className="table-data"><p>{price}</p></div>
            <div className="table-data"><p><Link to={`/${id}?strId=${strId}&name=${name}&price=${price}`}>Перейти</Link></p></div>
        </div>
        
    );
};

export default Securities;