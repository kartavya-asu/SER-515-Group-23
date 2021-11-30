import React from 'react';
import Faq from "react-faq-component";
import { Container } from 'reactstrap';

// const FAQ = () => {
// return (
// 	<div
// 	style={{
// 		display: 'flex',
// 		justifyContent: 'Center',
// 		alignItems: 'Top',
// 		height: '100vh'
// 	}}
// 	>
// 	<h1>Welcome to FAQ!</h1>
// 	</div>
// );
// };

const data = {	
	title: "Frequently Asked Questions (FAQ)",
	rows:[
		{
			title:"How much does the tournament registration cost?",
			content:`The fees for registering your team are posted on the Home page, under the Tournament at a Glance section, to the left side of the page.`,
		},
		{
			title:"What modes of payment are available for registration",
			content:"We accept all major credit cards and Paypal for payment. You can find more detailed information in the Tournament at a Glance section.",
		},
		{
			title: "Where can I find the referee registration form?",
			content:"You can find it in the 'Referees' section of the website when you click on the navigation button 'Referees'."
		},
		{
			title: "Can I register my team after the registration deadline?",
			content:"No, we do not accept applications after the stated deadline."
		},
		{
			title: "Does my team have to register for the tournament on Friday night?",
			content:"There are no on-site, in-person registrations. All team registrations are to be done online. The deadline to register is December 15, 2021."
		},
		{
			title: "What documents do I need to submit to register my team for the tournament?",
			content:"The registration packet must include all of the following documents: copy of Player Cards, copy of Contact Form, copy of the Coaches, copy of State Approved Team Roster."
		},
		{
			title: "When is my roster frozen?",
			content:"Your roster will be frozen on the Monday before the weekend tournament."
		},
		{
			title: "Where can I find the registration form? ",
			content:"You can find the registration form on the Apply page."
		},
		{
			title: "How do I select which division to place my team in?",
			content:"During the team selection process, your team will be placed in a division the committee finds most suitable and most competitive. You will not need to mention the division, however you can indicate your preference in the registration packet."
		},
		{
			title: "When will I be informed if my team is selected for the tournament?",
			content:"You will be informed 3 weeks after the deadline of the team registration application."
		},
		{
			title: "Where and how will the team selection results be posted?",
			content:"You will receive a confirmatory email or be contacted using the contact information you have provided in the registration packet."
		},
		{
			title: "When will the schedules of the tournament be posted?",
			content:"The schedule will be posted about 4 weeks prior to the start of the tournament. In case you are the Team Manager, you will be sent an email when the schedule is posted or if any changes are made to the schedule. Additionally, you can view the schedule and scores in the ‘Scores and Schedules’ tab on the navigation bar of the home page of our website."
		},
		{
			title: "How can I become a sponsor?",
			content:"Please get in contact with sponsors@sparkysoccer.org to initiate the process of becoming a sponsor."
		},
		{
			title: "I am unable to view the acceptance packet PDF. How do I get it?",
			content:"Right-click on the link and open it in a new tab. You can also save the file as a PDF."
		},
		{
			title: "I am unable to download or print the PDF files. What do I do?",
			content:"Kindly check if you have Acrobat Reader installed on your computer or not."
		},
	],
};

const styles ={
	display:'flex',
	justifyContent:'center',
	titleTextColor : "purple",
	titleTextSize : '30px',
	rowTitleColor: 'black',
	rowTitleTextSize: 'medium',
	rowContentColor: "grey",
	rowContentTextSize: '15px',
	rowContentPaddingTop: '10px',
	rowContentPaddingBottom: '10px',
	rowContentPaddingLeft: '10px',
	rowContentPaddingRight: '10px',
	alignItems:'Top',
	//transitionDuration: "ls",
	timingFunc: "ease",
	bgColor: 'white',
	margin: '10px',
	arrowColor: "grey"
}

const config = {
	animate:true,
	arrowIcon: "v",
	tabFocus: true
}

export default function FAQ(){
	return (
		<div>
			<Container>
			<Faq
				data={data}
				styles={styles}
				config={config}
			/>
			</Container>
		</div>
	);
}

//export default FAQ;
