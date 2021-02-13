import React from 'react';
import styled from 'styled-components';
import '../style/Home.css';
import {Link} from "react-router-dom";

import bg from '../images/aipic-1080x675.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="home"

            >
                <h1 className="title">
                    YUHACKS 2021
                </h1>
                <div className="blurb">
                    <div style={{fontWeight: '700'}}>
                        What we are:
                    </div>
                    <div>
                        A group of people trying to facilitate learning.
                    </div>
                    <br />
                    <div style={{fontWeight: '700'}}>
                        How we are doing that:
                    </div>
                    We analyze your lectures for keywords.
                    Then we search the world (wide web) for questions that can test your understanding and stimulate your mind.
                    <br />
                </div>
                <Link to="/upload" style={{alignSelf: 'center'}}>
                    <Button className="startbtn">Get Started</Button>
                </Link>
            </div>
        );
    }
}

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default Home;