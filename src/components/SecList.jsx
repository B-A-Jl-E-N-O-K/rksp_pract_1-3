import React from 'react';
import Securities from './Securities';
import TableHeader from './TableHeader';

const secArr = [
    {id: 1, strId: 'ABIO', name: 'ПАО Артген', price: 100}, 
    {id: 2, strId: 'ABRD', name: 'Абрау-Дюрсо ПАО ао', price: 200}, 
    {id: 3, strId: 'ACKO', name: 'АСКО ПАО ао', price: 300}, 
];

const SecList = () => {
return (

    <div className="table">

        <TableHeader/>

        <div className="table-content">
            {secArr.map(sec => (
            <Securities id={sec.id} strId={sec.strId} name={sec.name} price={sec.price} />
            ))}
        </div>

    </div>
);
};
export default SecList;