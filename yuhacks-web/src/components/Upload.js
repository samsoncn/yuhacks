import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './Upload.css';
import useStorage from "./hooks/useStorage";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Upload() {

    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const types = ['video/mp4'];

    const Button = styled.button`
      background-color: black;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 5px;
      margin: 10px 0px;
      cursor: pointer;
    `;

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
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <form>
            <div className='display'>

                { file && <ProgressBar setUrl={setUrl} file={file} setFile={setFile} /> }
                { error && <div className='error'>{ error }</div> }
                { file && <div>{ file.name } </div >}

            </div>
            <label>
                <p>Drag and drop file here to upload.</p>
                <br />
                <p>(or click to select file to upload)</p>
                <input type="file" onChange={changeHandler}/>
            </label>
       
        </form>
            {url &&
                <Link to={{pathname: "/results", state: {link: url}}} style={{ justifySelf: 'center', alignSelf: 'center'}}>
                    <Button>
                        Analyze
                    </Button>
                </Link>
            }
        </div>

    )

}

export default Upload;