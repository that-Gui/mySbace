import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import styles from './page.module.css';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { SignOutButton } from '@/components/buttons/Buttons';
import { UserProfileForm } from '@/components/UserProfileForm/UserProfileForm';

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	// if the user does not share his email with us, we cannot find him in the database and this breaks the app, like github login that does not share email account
	const currentUserEmail = session?.user?.email!;
	// removing the await allows the component to mount without waiting for the user to be fetched
	const user = /* await */ prisma.user.findUnique({
		where: {
			email: currentUserEmail,
		},
	});

	return (
		<div className={styles.dashboardpagecontainer}>
			<h1>Dashboard</h1>
			<SignOutButton />
			<UserProfileForm user={user} />
		</div>
	);
}
