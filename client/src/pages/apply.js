import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import "./apply.module.css";

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
	const [secaddress, setSecAddress] = React.useState("");
	const [secemail, setSecEmail] = React.useState("");
	const [secphone, setSecPhone] = React.useState("");

	const handleSubmit = (event) => {
		let teams = JSON.parse(localStorage.getItem('teams')||'[]');
		teams.push({
			Appgroup: appgroup,
		  TeamName: teamname,
		  LeagueGender: leaguegender,
		  LeagueAge: leagueage,
		  CoachName: coachname,
		  TeamCity: teamcity,
		  TeamState: teamstate,
		  PlayLevelDesired:playleveldesired,
		  ContactName:contactname,
		  Address:address,
		  Email:email,
		  Phone:phone,
		  SecContactName:seccontactname,
		  secaddress: secaddress,
		  SecEmail:secemail,
		  SecPhone:secphone,
		})
		localStorage.setItem('teams', JSON.stringify(teams));
		event.preventDefault();
		alert("submitted!");
	}
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'Center',
			flexDirection: 'column',
			alignItems: 'Top',
			alignItems: 'center',
		}}>
			<h1 style={{ textAlign: 'center' }}>Apply Here!</h1>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h2>_____________________________________________________</h2>

				<h4>TEAM APPLICATION</h4>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Application group</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={appgroup}
						label="Application Group"
						onChange={(e) => setAppgroup(e.target.value)}
					>
						<MenuItem value={"U8-Gold"}>U8-Gold</MenuItem>
						<MenuItem value={"U8-Red"}>U8-Red</MenuItem>
						<MenuItem value={"U18-Gold"}>U18-Gold</MenuItem>
						<MenuItem value={"U18-Red"}>U18-Red</MenuItem>
					</Select>

				</FormControl>
				<TextField value={teamname} onChange={(e) => setTeamName(e.target.value)} id="standard-basic" label="team name" variant="standard" />
				<FormControl sx={{ marginTop: 2 }}>
					<InputLabel id="gender">league gender</InputLabel>
					<Select
						labelId="gender"
						id="demo-simple"
						value={leaguegender}
						label="league gender"
						onChange={(e) => setLeagueGender(e.target.value)}
					>
						<MenuItem value={"Boys"}>Boys</MenuItem>
						<MenuItem value={"Girls"}>Girls</MenuItem>
					</Select>
				</FormControl>
				<TextField value={coachname} onChange={(e) => setCoachName(e.target.value)} id="standard-basic" label="coach name" variant="standard" />
				<TextField value={teamcity} onChange={(e) => setTeamCity(e.target.value)} id="standard-basic" label="team city" variant="standard" />
				<TextField value={teamstate} onChange={(e) => setTeamState(e.target.value)} id="standard-basic" label="team state" variant="standard" />
				<h4>Primary Contact Information</h4>

				<TextField value={contactname} onChange={(e) => setContactName(e.target.value)} id="standard-basic" label="contact name" variant="standard" />
				<TextField value={address} onChange={(e) => setAddress(e.target.value)} id="standard-basic" label="address" variant="standard" />
				<TextField value={email} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="email id" variant="standard" />
				<TextField value={phone} onChange={(e) => setPhone(e.target.value)} id="standard-basic" label="phone number" variant="standard" />

				<h4>Secondary Contact Information</h4>

				<TextField value={seccontactname} onChange={(e) => setSecContactName(e.target.value)} id="standard-basic" label="contact name" variant="standard" />
				<TextField value={secaddress} onChange={(e) => setSecAddress(e.target.value)} id="standard-basic" label="address" variant="standard" />
				<TextField value={secemail} onChange={(e) => setSecEmail(e.target.value)} id="standard-basic" label="email id" variant="standard" />
				<TextField value={secphone} onChange={(e) => setSecPhone(e.target.value)} id="standard-basic" label="phone number" variant="standard" />
				
				<Button onClick={handleSubmit} sx={{ marginBottom: 6, marginTop: 2 }} variant="contained">Submit</Button>
			</div>



		</div>
	);
};

export default ApplyToTournament;
