import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'mySbace users page',
	description: 'mySbace users directory.',
};

export default async function Users() {
	const session = await getServerSession();

	if (!session) {
		redirect('/api/auth/signin');
		/* return <p>You must be signed in...</p>; */
	}
	return (
		<div>
			<h1>Users page</h1>
		</div>
	);
}
