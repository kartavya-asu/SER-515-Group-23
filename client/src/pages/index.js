import React, {useState, useEffect} from 'react';
import {Container, List} from 'reactstrap'; 

const Home = () => {
    const [tournamentDetails, setTournamentDetails] = useState({})
    useEffect(() => {
        setTournamentDetails(JSON.parse(localStorage.getItem("tournamentDetails")||'{}'));
        console.log(JSON.parse(localStorage.getItem("tournamentDetails")||'{}'))
	},[]);
return (
	<div style={{ height: "75vh", opacity: '0.85' }} className="container valign-wrapper">
                <div className="row" style={{padding:'16px'}}>
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
                    <Container style={{backgroundColor: "WHITE", borderRadius: '16px', padding: '0 16px 16px 16px'}}>
                    <List type="unstyled">
                    <p><b>WHEN:</b>	{tournamentDetails?.when}</p>
                    <p><b>WHERE:</b> {tournamentDetails?.where}</p>
                    <p><b>FEES:</b>
                    <ul>
                    <li>uTen Fees - {tournamentDetails?.uTenFees}</li>
                    <li>uTwleve Fees - {tournamentDetails?.uTwelveFees}</li>
                    <li>uFourteen Fees - {tournamentDetails?.uFourteenFees}</li>
                    <li>uEighteen Fees - {tournamentDetails?.uEighteenFees}</li>
                    </ul>
                    </p>
                    <p><b>APPLICATION DEADLINE:</b>{tournamentDetails?.deadline}</p>
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