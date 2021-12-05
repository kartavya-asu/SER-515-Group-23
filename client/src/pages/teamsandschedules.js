import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as parkData from "./venues.json";

const Teams = () => {
	const [schedule, setSchedule] = useState([]);
	const [isScheduleVisible, setIsScheduleVisible] = useState("false");
	useEffect(() => {
		let sch = []
		let teams = JSON.parse(localStorage.getItem('approvedTeams') || '[]')
		let referees = JSON.parse(localStorage.getItem('approvedReferees') || '[]')
		setIsScheduleVisible(localStorage.getItem('scheduleVisibility') || "false");
		for (let i = 0; i < teams.length; i += 2) {
			let tournamentDate = "";
			if (i < teams.length/2) {
				tournamentDate = "12/29/2021";
			} else {
				tournamentDate = "12/30/2021";
			}
			let temp = {
				Team1: teams[i].TeamName,
				Team2: teams[i + 1].TeamName,
				referee: referees[Math.floor(i / 2)]?.name,
				venue: parkData.features[Math.floor(i / 2)]?.properties?.NAME,
				tournamentDate
			}
			sch.push(temp);
		}
		setSchedule(sch);
	}, []);
	return (isScheduleVisible == "true") ? (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<h4 style={{ width: '80%' }}>Here you will find Info related to Teams and their Schedules</h4>
			<div style={{ width: '80%' }}>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="table">
						<TableHead>
							<TableRow>
								<TableCell>Date</TableCell>
								<TableCell>Team 1 name</TableCell>
								<TableCell align="right">team 1 score</TableCell>
								<TableCell align="right"></TableCell>
								<TableCell align="right">team 2 score</TableCell>
								<TableCell align="right">Team 2 name</TableCell>
								<TableCell align="right">referee name</TableCell>
								<TableCell align="right">venue</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{schedule.map((row) => (
								<TableRow
									key={row.Team1}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.tournamentDate}
									</TableCell>
									<TableCell align="right">{row.Team1}</TableCell>
									<TableCell align="right">0</TableCell>
									<TableCell align="right">-</TableCell>
									<TableCell align="right">0</TableCell>
									<TableCell align="right">{row.Team2}</TableCell>
									<TableCell align="right">{row.referee}</TableCell>
									<TableCell align="right">{row.venue}</TableCell>

								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	):<h3 style={{textAlign:'center'}}>Tournament director will schedule the matches soon.</h3>;
};

export default Teams;
