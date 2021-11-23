import React from 'react';


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