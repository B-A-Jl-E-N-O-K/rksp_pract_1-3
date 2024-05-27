
import React from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShortTableHeader from './components/ShortTableHeader';
import SimpleTableRow from './components/SimpleTableRow';


const SecPage = () => {

    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const strId = searchParams.get('strId');
    const name = searchParams.get('name');
    const price = searchParams.get('price');
    return (
        <div>
            <Header title={name}/>
            <div className="table">

                    <ShortTableHeader/>

                    <div className="table-content" id="table-cont-id">

                        <div className="table-row">
                            <div className="table-data"> 
                                <button><Link to={`/boughtsec?id=${id}&strId=${strId}&name=${name}&price=${price}`}>Купить</Link></button>
                            </div>
                        </div>

                        <SimpleTableRow id={id} strId={strId} name={name} price={price}/>

                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default SecPage;


