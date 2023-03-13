import { writable } from 'svelte/store';

export const FAQStore = writable([
	{
		id: 1,
		question: 'What is your work process like?',
		answer:
			'We work with businesses of all sizes, across a wide range of industries. Our consulting services are tailored to the specific needs and goals of each client, and we have extensive experience working with businesses in sectors such as healthcare, technology, retail, manufacturing, and more.'
	},
	{
		id: 2,
		question: 'What makes your approach to consulting unique?',
		answer:
			"At our consulting firm, we take a holistic approach to our clients' needs considering not just their specific challenges or pain points, but also their broader strategic goals and long-term vision. We bring together a team of experienced consultants with a wide range of skills and expertise, working collaboratively with our clients to develop innovative solutions that drive real results."
	},
	{
		id: 3,
		question: 'How long does a typical consulting engagement last?',
		answer:
			'The length of a consulting engagement can vary depending on the scope of the project and the specific needs of the client. Some projects may be completed in just a few weeks or months, while others may take longer. Our consulting team works closely with our clients to establish clear timelines and milestones, ensuring that we are working efficiently and effectively towards our shared goals.'
	},
	{
		id: 4,
		question: 'What kind of results can we expect from working with your consulting firm?',
		answer:
			'While every consulting engagement is unique, our goal is always to deliver tangible, measurable results for our clients. Depending on the project, these results may include increased revenue or profitability, improved efficiency and productivity, enhanced customer satisfaction, or other positive outcomes. We are committed to working closely with our clients throughout the engagement to ensure that we are meeting their needs and exceeding their expectations.'
	},
	{
		id: 5,
		question: 'What qualifications and experience do your consultants have?',
		answer:'Our consultants have diverse backgrounds and expertise, ranging from business strategy and operations to marketing, finance, and technology. All of our consultants have extensive industry experience, and many hold advanced degrees from top universities. We also invest in ongoing training and development for our consultants to ensure they stay up-to-date with the latest trends and best practices in their fields.'

	},
	{
		id: 6,
		question: 'How do you measure the success of a consulting engagement?',
		answer: "We establish clear goals and objectives with our clients at the start of each engagement, and regularly track progress towards these goals throughout the project. We use a variety of metrics and KPIs to measure success, depending on the nature of the project and the client's goals. Our consultants also work closely with clients to ensure they have the necessary tools and processes in place to continue driving results even after the engagement is complete."
	}
]);
