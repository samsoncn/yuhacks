import React, { useState } from 'react';
import '../style/Result.css';

function QACard() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="card">
            <div>Question:</div>
            <div>What is the meaning of Life?</div>
            <div onClick={()=>{handleClick()}}>
                <br/>
                {click ? <div>Answer</div> : <div>Show Answer</div>}
            </div>
        </div>
    )
}



export default QACard;