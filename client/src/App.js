import React from "react";
//import './App.css';
import background from "./background.jpeg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "./store";
import { render } from "react-dom";
import Header from "./components/layout/Header";
import Navbar from "./components/Navbar";

import Home from "./pages";
//import Home from './pages/home';
import ApplyToTournament from "./pages/apply";
import Referees from "./pages/referees";
import Teams from "./pages/teamsandschedules";
import Maps from "./pages/map";
import FAQ from "./pages/faq";
import Sponsors from "./pages/sponsors";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="App" style={{ backgroundImage: `url(${background})` }}>
//             <Navbar />
//             <Route exact path="/" component={Landing} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/login" component={Login} />
//             <Switch>
//               <PrivateRoute exact path="/dashboard" component={Dashboard} />
//             </Switch>
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }

//<h1> Playing with React Component!</h1>

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" 
          style={{ 
            // backgroundImage: `url(${background})`,
            // backgroundRepeat: `no-repeat` 
          }}>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/apply" component={ApplyToTournament} />
            <Route path="/teamsandschedules" component={Teams} />
            <Route path="/referees" component={Referees} />
            <Route path="/map" component={Maps} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/faq" component={FAQ} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

//Testing git commit with guet