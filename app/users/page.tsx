import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'mySbace users page',
	description: 'mySbace users directory.',
};

export default function Users() {
	return (
		<div>
			<h1>Users page</h1>
		</div>
	);
}
