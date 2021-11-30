import React from 'react';
import {Container, List} from 'reactstrap'; 


const Home = () => {
return (
	<div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Welcome!</b> to {" "}
                            <span style={{ fontFamily: "monospace" }}>ASU Sparky Soccer Tournament</span>
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Join the SunDevil Family
                        </p>
                        <br />
                    </div>
                    <Container style={{backgroundColor: "WHITE"}}>
                    <List type="unstyled">
                    <p><b>WHEN:</b>	Memorial Day Weekend, January 29-30, 2022</p>
                    <p><b>WHERE:</b> Tempe, Arizona </p>
                    <p><b>FEES:</b>
                    <ul>
                    <li>u9/u10 $625</li>
                    <li>u10/u11/u12 $675</li>
                    <li>u12/u13/u14 $725</li>
                    <li>u15/u16/u17/u18/u19 $775</li>
                    </ul>
                    </p>
                    <p><b>APPLICATION DEADLINE:</b> December 15, 2021</p>
                    </List>
                    </Container>
                </div>
            </div>	
);
};

export default Home;
// <div
// 	style={{
// 		display: 'flex',
// 		justifyContent: 'Center',
// 		alignItems: 'Center',
// 		height: '100vh'
// 	}}
// 	>
// 	<h1>Home Page!</h1>
// 	</div>