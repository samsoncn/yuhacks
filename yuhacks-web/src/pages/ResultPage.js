import React from 'react';
import QACard from "../components/QACard";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Child() {
}

class ResultPage extends React.Component {
    componentDidMount() {
        const url = this.props.match.params.link;
        console.log(url); //state would be in data.state//
/*         axios.post('/api/orders/late', {}, {
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }})
            .then(
                (res) => {

                }
            ) */
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