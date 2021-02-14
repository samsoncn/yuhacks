import React from 'react';
import QACard from "../components/QACard";
import MCCard from "../components/MCCard"
import axios from "axios";

class ResultPage extends React.Component {
    componentDidMount() {
        axios.post('/api/orders/late', {}, {
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }})
            .then(
                (res) => {

                }
            )
    }

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