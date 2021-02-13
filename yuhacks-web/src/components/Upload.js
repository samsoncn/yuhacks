import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './Upload.css';

function Upload() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['video/mp4'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an video file (mp4)');
        }

    };
    return (
        <>
        <form>
            <div className='display'>
                { file && <ProgressBar file={file} setFile={setFile} /> }
                { error && <div className='error'>{ error }</div> }
                { file && <div>{ file.name } </div >}
            </div>
            <label>
                <p>Easily convert to and from Text in seconds.</p>
                <input type="file" onChange={changeHandler} />
                <span>drap files here</span>
            </label>
       
        </form>
        </>

    )
}

export default Upload;