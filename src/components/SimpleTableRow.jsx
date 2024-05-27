import React from 'react';

const SimpleTableRow = ({id, strId, name, price}) => {
    return (
        
        <div className="table-row">
            <div className="table-data">{id}</div>
            <div className="table-data">{strId}</div>
            <div className="table-data">{name}</div>
            <div className="table-data">{price}</div>
        </div>
        
    );
};

export default SimpleTableRow;




