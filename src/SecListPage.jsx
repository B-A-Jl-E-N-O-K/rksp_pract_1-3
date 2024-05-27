import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SecList from './components/SecList';


const SecListPage = () => {
    return (
        <div>
            <Header title="Traded Securities"/>
            <SecList>
            </SecList>
            <Footer />
        </div>
    );
};

export default SecListPage;