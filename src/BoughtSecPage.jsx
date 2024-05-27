import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSearchParams } from 'react-router-dom';
import ShortTableHeader from './components/ShortTableHeader';
import SimpleTableRow from './components/SimpleTableRow';

const BoughtSecPage = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const strId = searchParams.get('strId');
    const name = searchParams.get('name');
    const price = searchParams.get('price');


    return (
        <div>
            <Header title="Invest Portfolio"/>

            <div className="table">
                <div className="table-content" id="table-cont-id">
                    <ShortTableHeader/>
                    <SimpleTableRow id={id} strId={strId} name={name} price={price}/>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BoughtSecPage;
