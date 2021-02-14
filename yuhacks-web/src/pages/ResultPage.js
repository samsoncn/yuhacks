import React from 'react';
import QACard from "../components/QACard";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Child() {
}

class ResultPage extends React.Component {
    componentDidMount() {
        const url = this.props.location.state.link;
        console.log(this.props.location.state);
        console.log(url);
        //state would be in data.state//
        axios.post('/api/questions', {url})
            .then(
                (res) => {
                    console.log(res.data)
                }
            )
    }

    render() {
        return (
            <>
                <h1 style={{textAlign: 'center', marginTop: '100px'}}>
                    RESULTS
                </h1>
                <div className="" style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                    <QACard question={"What is python?"} answer={"An interpreted programming language"}/>
                    <QACard question={"Why is python important?"} answer={"Because it's easy to use."}/>
                    <QACard question={"What is the origin of the name python"} answer={"Monty Python"}/>
                </div>
            </>

        );
    }
}

export default ResultPage;