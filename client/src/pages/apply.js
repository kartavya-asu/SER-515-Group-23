import React from 'react';
import { Container } from 'reactstrap';
import "./apply.css";

const ApplyToTournament = () => {
	const [appgroup, setAppgroup] = React.useState("");
	const [teamname, setTeamName] = React.useState("");
	const [leaguegender, setLeagueGender] = React.useState("");
	const [leagueage, setLeagueAge] = React.useState("");
	const [coachname, setCoachName] = React.useState("");
	const [teamcity, setTeamCity] = React.useState("");
	const [teamstate, setTeamState] = React.useState("");
	const [playleveldesired, setPlayLevelDesired] = React.useState("");
	const [contactname, setContactName] = React.useState("");
	const [contactdesignation, setContactDesignation] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [seccontactname, setSecContactName] = React.useState("");
	const [seccontactrole, setSecContactRole] = React.useState("");
	const [secemail, setSecEmail] = React.useState("");
	const [secphone, setSecPhone] = React.useState("");
	const handleSubmit = (event) => {
		console.log(`
		  Appgroup: ${appgroup}
		  TeamName: ${teamname}
		  LeagueGender: ${leaguegender}
		  LeagueAge: ${leagueage}
		  CoachName: ${coachname}
		  TeamCity: ${teamcity}
		  TeamState: ${teamstate}
		  PlayLevelDesired:${playleveldesired}
		  ContactName:${contactname}
		  ContactDesignation:${contactdesignation}
		  Address:${address}
		  Email:${email}
		  Phone:${phone}
		  SecContactName:${seccontactname}
		  SecContactRole:${seccontactrole}
		  SecEmail:${secemail}
		  SecPhone:${secphone}	
		`);
		event.preventDefault();
		alert("submitted!");
	}
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'Center',
			alignItems: 'Top',
			height: '100vh'
		}}>
		<Container>
			<h1>Apply Here!</h1>
			<h2>_____________________________________________________</h2>

			<h4>TEAM APPLICATION</h4>
			<form onSubmit={handleSubmit}>
				<table>
					<tr>
						<label>
							Application Group:
							<select value={appgroup} onChange={e => setAppgroup(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>
					</tr>

					<h4>TEAM INFORMATION</h4>


					<tr>
						<label>
							Team Name:
							<input
								name="teamname"
								type="string"
								value={teamname}
								onChange={e => setTeamName(e.target.value)}
								required />
						</label>
					</tr>

					<tr>

						<label>
							League Gender:
							<select value={leaguegender} onChange={e => setLeagueGender(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>

					</tr>

					<tr>
						<label>
							League Age:
							<select value={leagueage} onChange={e => setLeagueAge(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>
					</tr>

					<tr>
						<label>
							Coach Name:
							<input
								name="coachname"
								type="string"
								value={coachname}
								onChange={e => setCoachName(e.target.value)}
								required />
						</label>
					</tr>


					<tr>
						<label>
							Team City:
							<input
								name="teamcity"
								type="string"
								value={teamcity}
								onChange={e => setTeamCity(e.target.value)}
								required />
						</label>
					</tr>


					<tr>
						<label>
							Team State:
							<select value={teamstate} onChange={e => setTeamState(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>
					</tr>


					<tr>



						<label>
							Play Level Desired:
							<select value={playleveldesired} onChange={e => setPlayLevelDesired(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>

					</tr>

					<h4>PRIMARY CONTACT INFORMATION</h4>

					<tr>
						<label>
							Contact Name
							<input
								name="contactname"
								type="string"
								value={contactname}
								onChange={e => setContactName(e.target.value)}
								required />
						</label>
					</tr>


					<tr>


						<label>
							Contact Designation:
							<select value={contactdesignation} onChange={e => setContactDesignation(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>



					</tr>

					<tr>
						<label>
							Address
							<input
								name="address"
								type="string"
								value={address}
								onChange={e => setAddress(e.target.value)}
								required />
						</label>
					</tr>


					<tr>
						<label>
							Email Id
							<input
								name="email"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required />
						</label>
					</tr>


					<tr>
						<label>
							Phone Number
							<input
								name="phone"
								type="integer"
								value={phone}
								onChange={e => setPhone(e.target.value)}
								required />
						</label>
					</tr>

					<h4>SECONDARY CONTACT INFORMATION</h4>

					<tr>
						<label>
							Contact Name
							<input
								name="seccontactname"
								type="string"
								value={seccontactname}
								onChange={e => setSecContactName(e.target.value)}
								required />
						</label>
					</tr>


					<tr>


						<label>
							Contact Role:
							<select value={seccontactrole} onChange={e => setSecContactRole(e.target.value)}>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>

					</tr>

					<tr>
						<label>
							Email Id
							<input
								name="secemail"
								type="email"
								value={secemail}
								onChange={e => setSecEmail(e.target.value)}
								required />
						</label>
					</tr>


					<tr>
						<label>
							Phone Number
							<input
								name="secphone"
								type="integer"
								value={secphone}
								onChange={e => setSecPhone(e.target.value)}
								required />
						</label>
					</tr>

				</table>
				{/* <button>Submit</button> */}
				<input type="submit" className="submitButton" />
			</form>
			</Container>
		</div>
	);
};

export default ApplyToTournament;
