import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox, FormControlLabel, FormGroup, Switch, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Box } from "@mui/system";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  state = {
    teams: [],
    referees: [],
    tournamentDetails: {
      when: "",
      where: "",
      uTenFees: "",
      uTwleveFees: "",
      uFourteenFees: "",
      uEighteenFees: "",
      deadline: ""
    },
    tabValue: 0
  }

  label = { inputProps: { 'aria-label': 'Switch demo' } };


  ApproveHandler(teamName) {
    let teams = [...this.state.teams];
    let team = teams.filter(el => el.TeamName === teamName)[0] ?? {};
    this.setState({ ...this.teams, teams: teams.filter(el => el.TeamName !== teamName) })
    localStorage.setItem('teams', JSON.stringify(teams.filter(el => el.TeamName !== teamName)));
    let approvedTeams = JSON.parse(localStorage.getItem('approvedTeams') || '[]');
    approvedTeams.push(team);
    localStorage.setItem('approvedTeams', JSON.stringify(approvedTeams));
  }

  ApproveRefereeHandler(name) {
    let referees = [...this.state.referees];
    let referee = referees.filter(el => el.name === name)[0] ?? {};
    this.setState({ ...this.teams, referees: referees.filter(el => el.name !== name) })
    localStorage.setItem('referees', JSON.stringify(referees.filter(el => el.name !== name)));
    let approvedReferees = JSON.parse(localStorage.getItem('approvedReferees') || '[]');
    approvedReferees.push(referee);
    localStorage.setItem('approvedReferees', JSON.stringify(approvedReferees));
  }

  componentDidMount() {
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    let referees = JSON.parse(localStorage.getItem('referees') || '[]');
    let tournamentDetails = JSON.parse(localStorage.getItem('tournamentDetails') || '{}');
    this.setState({ teams, referees, tournamentDetails });
  }

  handleWhen = (e) => {
    const when = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, when };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleWhere = (e) => {
    const where = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, where };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleUTenFees = (e) => {
    const uTenFees = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, uTenFees };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleUTwelveFees = (e) => {
    const uTwelveFees = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, uTwelveFees };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleUFourteenFees = (e) => {
    const uFourteenFees = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, uFourteenFees };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleUEighteenFees = (e) => {
    const uEighteenFees = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, uEighteenFees };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleDeadline = (e) => {
    const deadline = e.target.value;
    let tournamentDetails = { ...this.state.tournamentDetails, deadline };
    this.setState({ ...this.state, tournamentDetails });
  }

  handleSubmit = () => {
    localStorage.setItem('tournamentDetails', JSON.stringify(this.state.tournamentDetails));
    alert("submitted");
  }

  a11yProps(index) {
    return {
      num: index,
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  handleChange = (newValue) => {
    this.setState({ ...this.state, tabValue: +(newValue.target.getAttribute('num') ?? 0) })
  };

  render() {
    const { user } = this.props.auth;
    console.log("Into the Dashboad");
    console.log(this.props);
    console.log(user);
    const rows = this.state.teams;
    const refereeRows = this.state.referees;
    const scheduleVisibility = localStorage.getItem('scheduleVisibility') || 'false';
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into the{" "}
                <span style={{ fontFamily: "monospace" }}>SunDevil Soccer Tournament</span> dashboard 👏
              </p>
              <p className="flow-text grey-text text-darken-1">
                You are:
                {user.name == "kartavya" && (
                  <React.Fragment>
                    <p> Tournament Director</p>
                    <h2>_____________________________________________________</h2>

                    {scheduleVisibility == 'false' ? <Button onClick={() => { localStorage.setItem('scheduleVisibility', true); this.setState({...this.state})}} sx={{ marginRight: 4 }} variant="contained">Schedule tournament</Button>
                      : <Button onClick={() => { localStorage.setItem('scheduleVisibility', false); this.setState({...this.state}) }} variant="outlined">Remove old schedule</Button>}

                    
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={this.state.tabValue} onChange={this.handleChange} aria-label="basic tabs example">
                        <Tab label="Tournament Director" {...this.a11yProps(0)} />
                        <Tab label="Team Director" {...this.a11yProps(1)} />
                        <Tab label="Referee Director" {...this.a11yProps(2)} />
                      </Tabs>
                    </Box>
                    <TabPanel value={this.state.tabValue} index={0}>
                    <h4>HomePage Tournament Info</h4>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <TextField value={this.state.tournamentDetails.when} onChange={this.handleWhen} id="standard-basic" label="When" variant="standard" />
                        <TextField value={this.state.tournamentDetails.where} onChange={this.handleWhere} id="standard-basic" label="Where" variant="standard" />
                        <TextField value={this.state.tournamentDetails.uTenFees} onChange={this.handleUTenFees} id="standard-basic" label="UTem Fees" variant="standard" />
                        <TextField value={this.state.tournamentDetails.uTwleveFees} onChange={this.handleUTwelveFees} id="standard-basic" label="UTwelve Fees" variant="standard" />
                        <TextField value={this.state.tournamentDetails.uFourteenFees} onChange={this.handleUFourteenFees} id="standard-basic" label="UFourteen Fees" variant="standard" />
                        <TextField value={this.state.tournamentDetails.uEighteenFees} onChange={this.handleUEighteenFees} id="standard-basic" label="UEighteen Fees" variant="standard" />
                        <TextField value={this.state.tournamentDetails.deadline} onChange={this.handleDeadline} id="standard-basic" label="Deadline" variant="standard" />
                        <Button onClick={this.handleSubmit} sx={{ marginBottom: 6, marginTop: 2 }} variant="contained">Submit</Button>
                      </div>
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={1}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Application group</TableCell>
                              <TableCell align="right">team name</TableCell>
                              <TableCell align="right">league gender</TableCell>
                              <TableCell align="right">coach name</TableCell>
                              <TableCell align="right">team city</TableCell>
                              <TableCell align="right">primary contact name</TableCell>
                              <TableCell align="right">primary contact email</TableCell>
                              <TableCell align="right">primary contact phone</TableCell>
                              <TableCell align="right">approve</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.Appgroup}
                                </TableCell>
                                <TableCell align="right">{row.TeamName}</TableCell>
                                <TableCell align="right">{row.LeagueGender}</TableCell>
                                <TableCell align="right">{row.CoachName}</TableCell>
                                <TableCell align="right">{row.TeamCity}</TableCell>
                                <TableCell align="right">{row.ContactName}</TableCell>
                                <TableCell align="right">{row.Email}</TableCell>
                                <TableCell align="right">{row.Phone}</TableCell>
                                <TableCell align="right">
                                  <Button variant="contained" onClick={() => this.ApproveHandler(row.TeamName)}>Approve</Button>
                                </TableCell>


                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={2}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="table">
                          <TableHead>
                            <TableRow>
                              <TableCell>name</TableCell>
                              <TableCell align="right">email</TableCell>
                              <TableCell align="right">phone number</TableCell>
                              <TableCell align="right">gender</TableCell>
                              <TableCell align="right">experience in years</TableCell>
                              <TableCell align="right">days availability</TableCell>
                              <TableCell align="right">shift size</TableCell>
                              <TableCell align="right">preferred gender</TableCell>
                              <TableCell align="right">approve</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {refereeRows.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.experience}</TableCell>
                                <TableCell align="right">{row.availability}</TableCell>
                                <TableCell align="right">{row.shiftSize}</TableCell>
                                <TableCell align="right">{row.preferredGender}</TableCell>
                                <TableCell align="right">
                                  <Button variant="contained" onClick={() => this.ApproveRefereeHandler(row.name)}>Approve</Button>
                                </TableCell>


                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TabPanel>
                  </React.Fragment>)}
                {user.name == "Purna" && <span> Field Director</span>}
                {user.name == "Bhavana Priya" && (
                  <React.Fragment>
                    <p> Team Director</p>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Application group</TableCell>
                            <TableCell align="right">team name</TableCell>
                            <TableCell align="right">league gender</TableCell>
                            <TableCell align="right">coach name</TableCell>
                            <TableCell align="right">team city</TableCell>
                            <TableCell align="right">primary contact name</TableCell>
                            <TableCell align="right">primary contact email</TableCell>
                            <TableCell align="right">primary contact phone</TableCell>
                            <TableCell align="right">approve</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.Appgroup}
                              </TableCell>
                              <TableCell align="right">{row.TeamName}</TableCell>
                              <TableCell align="right">{row.LeagueGender}</TableCell>
                              <TableCell align="right">{row.CoachName}</TableCell>
                              <TableCell align="right">{row.TeamCity}</TableCell>
                              <TableCell align="right">{row.ContactName}</TableCell>
                              <TableCell align="right">{row.Email}</TableCell>
                              <TableCell align="right">{row.Phone}</TableCell>
                              <TableCell align="right">
                                <Button variant="contained" onClick={() => this.ApproveHandler(row.TeamName)}>Approve</Button>
                              </TableCell>


                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </React.Fragment>


                )
                }
                {user.name == "Hameeda" && (
                  <React.Fragment>
                    <p> Referee Director</p>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="table">
                        <TableHead>
                          <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">phone number</TableCell>
                            <TableCell align="right">gender</TableCell>
                            <TableCell align="right">experience in years</TableCell>
                            <TableCell align="right">days availability</TableCell>
                            <TableCell align="right">shift size</TableCell>
                            <TableCell align="right">preferred gender</TableCell>
                            <TableCell align="right">approve</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {refereeRows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.email}</TableCell>
                              <TableCell align="right">{row.phoneNumber}</TableCell>
                              <TableCell align="right">{row.gender}</TableCell>
                              <TableCell align="right">{row.experience}</TableCell>
                              <TableCell align="right">{row.availability}</TableCell>
                              <TableCell align="right">{row.shiftSize}</TableCell>
                              <TableCell align="right">{row.preferredGender}</TableCell>
                              <TableCell align="right">
                                <Button variant="contained" onClick={() => this.ApproveRefereeHandler(row.name)}>Approve</Button>
                              </TableCell>


                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </React.Fragment>


                )
                }
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );

  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// <TextField value={where} onChange={handleWhere} id="standard-basic" label="WHERE" variant="standard" />
//                     <h6>Fees</h6>
//                     <TextField value={uTen} onChange={handleUTen} id="standard-basic" label="U9/U10" variant="standard" />
//                     <TextField value={uTwelve} onChange={handleUTwelve} id="standard-basic" label="U11/U12" variant="standard" />
//                     <TextField value={uFourteen} onChange={handleFourteen} id="standard-basic" label="U12/U13/U14" variant="standard" />
//                     <TextField value={uEighteen} onChange={handleEighteen} id="standard-basic" label="U15/U16/U17/U18" variant="standard" />
//                     <TextField value={applicationDeadline} onChange={handleDeadline} id="standard-basic" label="APPLICATION DEADLINE" variant="standard" />