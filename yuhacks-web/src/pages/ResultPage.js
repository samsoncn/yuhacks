import React from 'react';
import QACard from "../components/QACard";
import MCCard from "../components/MCCard"

class ResultPage extends React.Component {
    render() {
        return (
            <>
                <h1 style={{textAlign: 'center', marginTop: '100px'}}>
                    RESULTS
                </h1>
                <div className="" style={{display: 'flex', justifyContent: 'center'}}>
                    <QACard/>
                </div>
            </>

        );
    }
}

export default ResultPage;