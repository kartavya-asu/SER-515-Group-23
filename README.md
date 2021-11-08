# SER-515-Group-23

# SunDevil Soccer Tournament
 
## Overview
A centralized system to organize, schedule and manage a soccer tournament. This system is capable of handling various aspects of resource management, scheduling of tournaments, and sharing relevant updates pertaining to the tournament.
 
It was created as a final project for the SER 515 course.
 
 
---
 
## Team
 
- [Bhavana Priya Kanumuri](https://www.github.com/bkanumuri1)
- [Kartavya Ghanshyam Chauhan](https://www.github.com/kartavya-asu)
- [Purna Venkatesh Peddireddy](https://www.github.com/Purna-ASU)
- [Hameeda Mohammed Mustafa](https://www.github.com/Hameeda6)
 

---
 
## Main Functionalities
 
- Tournament organising
- Tournament scheduling
- Team registration
- Creating profiles for the tournament director, referee director, field director, team director, coach director and host coaches.
- Division of matches between the teams - making a tournament tree
- Displaying updates/notifications for the tournament
 
---
 
## Dependencies
 
We have used the following technologies and tools:
#### Frontend
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
 
 
#### Backend
 
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [ExpressJS](https://expressjs.com/)
- [NodeJS](https://nodejs.org/en/)
 
---
 
## Deployment
 
To deploy this project run
 
1. Initializing the NPM package manager
```bash
 npm init
```
 
2.
```bash
   npm i bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator
```
Download above dependencies 
 
3. Install nodemon
```bash
   npm i -D nodemon
```
 
4. Install the following dependencies in ./client directory.
```bash
   npm i axios classnames jwt-decode react-redux react-router-dom redux redux-thunk
```
 
5. cd .. back to the main directory and run the following command.

 ```
 npm run dev
 ```

Open [http://localhost:3000](http://localhost.000) to view it in browser

