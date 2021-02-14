import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './Upload.css';
import useStorage from "./hooks/useStorage";

function Upload() {

    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
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

    const urlCallback = (url) => {
        console.log(url)
        setUrl(url)
    }

    return (
        <>
        <form>
            <div className='display'>

                { file && <ProgressBar url={urlCallback} file={file} setFile={setFile} /> }
                { error && <div className='error'>{ error }</div> }
                { file && <div>{ file.name } </div >}

            </div>
            <label>

                <p>Click for easily convert to Text in seconds.</p>
                <input type="file" onChange={changeHandler}/>
                <p>drap files here</p>

            </label>
       
        </form>
            {url &&
                <div>

                </div>
            }
        </>

    )
}

export default Upload;