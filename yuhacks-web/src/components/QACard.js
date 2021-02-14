import React, { useState } from 'react';
import '../style/Result.css';

function QACard({question, answer}) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="card">
            <div>Question:</div>
            <div>{question}</div>
            <div onClick={()=>{handleClick()}}>
                <br/>
                {click ? <div>{answer}</div> : <div>Show Answer</div>}
            </div>
        </div>
    )
}



export default QACard;