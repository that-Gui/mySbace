import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'mySbace about',
	description: 'About mySbace company information.',
};

export default function About() {
	return (
		<div>
			<h1>About us</h1>
			<p>
				We are a social media company that wants to bring people together the
				old school way!
			</p>
		</div>
	);
}
