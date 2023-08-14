import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'mySbace blogs page',
	description: 'mySbace community blog content.',
};

export default async function Posts() {
	const session = await getServerSession();

	if (!session) {
		/* redirect('/api/auth/signin'); */
		return <p>You must be signed in...</p>;
	}
	return (
		<div>
			<h1>Posts page</h1>
		</div>
	);
}
