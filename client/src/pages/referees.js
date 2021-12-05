import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import "./apply.module.css";
const Referees = () => {

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("");
	const [experience, setExperience] = useState("");
	const [availability, setAvailability] = useState("");
	const [shiftSize, setShiftSize] = useState("");
	const [preferredGender, setPreferredGender] = useState("");
	
	const handleSubmit = (event) => {
		let referees = JSON.parse(localStorage.getItem('referees')||'[]');
		referees.push({
			name,
			address,
			email,
			phoneNumber,
			gender,
			experience,
			availability,
			experience,
			shiftSize,
			preferredGender
		})
		localStorage.setItem('referees', JSON.stringify(referees));
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
			<h1 style={{ textAlign: 'center' }}>Welcome to SunDevil Referee form</h1>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h2>_____________________________________________________</h2>

				<h4>Personal Info</h4>
				<TextField value={name} onChange ={(e) => setName(e.target.value)} id="standard-basic" label="name" variant="standard" />
				<TextField value={address} onChange ={(e) => setAddress(e.target.value)} id="standard-basic" label="address" variant="standard" />
				<TextField value={email} onChange ={(e) => setEmail(e.target.value)} id="standard-basic" label="email id" variant="standard" />
				<TextField value={phoneNumber} onChange ={(e) => setPhoneNumber(e.target.value)} id="standard-basic" label="phone number" variant="standard" />
				<FormControl sx={{marginTop: 2}}>
					<InputLabel id="gender">gender</InputLabel>
					<Select
						labelId="gender"
						id="demo-simple"
						label="Application Group"
						value={gender} onChange ={(e) => setGender(e.target.value)}
					>
						<MenuItem value={"Male"}>Male</MenuItem>
						<MenuItem value={"Female"}>Female</MenuItem>
					</Select>
				</FormControl>
				
				<h4>Experience and availability</h4>

				<TextField value={experience} onChange ={(e) => setExperience(e.target.value)} id="standard-basic" label="number of years as referee" variant="standard" />
				<TextField value={availability} onChange ={(e) => setAvailability(e.target.value)} id="standard-basic" label="days availability" variant="standard" />
				<TextField value={shiftSize} onChange ={(e) => setShiftSize(e.target.value)} id="standard-basic" label="shift size" variant="standard" />

				<FormControl sx={{marginTop: 2}}>
					<InputLabel id="gender">preferred gender</InputLabel>
					<Select
						labelId="gender"
						id="demo-simple"
						label="Application Group"
						value={preferredGender} 
						onChange ={(e) => setPreferredGender(e.target.value)}
					>
						<MenuItem value={"Boys"}>Boys</MenuItem>
						<MenuItem value={"Girls"}>Girls</MenuItem>
					</Select>
				</FormControl>
				<Button onClick={handleSubmit} sx={{ marginBottom: 6, marginTop: 2 }} variant="contained">Submit</Button>
			</div>



		</div>
	);
};

export default Referees;
