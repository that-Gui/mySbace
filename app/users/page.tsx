import type { Metadata } from 'next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import UserCard from '@/components/UserCard/UserCard';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'mySbace users page',
	description: 'mySbace users directory.',
};

export default async function Users() {
	const session = await getServerSession(authOptions);
	const users = await prisma.user.findMany();

	if (!session) {
		redirect('/api/auth/signin');
		// return <p>You must be signed in...</p>;
	}
	return (
		<div>
			<h1>Users page</h1>
			<div className={styles.grid}>
				{users.map((user) => {
					return <UserCard key={user.id} {...user} />;
				})}
			</div>
		</div>
	);
}
