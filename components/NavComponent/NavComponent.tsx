import Link from 'next/link';
import Image from 'next/image';
import styles from './NavComponent.module.css';
import { SignInButton, SignOutButton } from '../buttons/Buttons';
import AuthCheck from '../AuthCheck/AuthCheck';

export default function NavComponent() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<Image
					src='/logo.svg'
					alt='mySbace Logo'
					height={80}
					width={160}
					className={styles.logo}
				/>
			</Link>
			<ul className={styles.links}>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/posts'>Posts</Link>
				</li>
				<li>
					<Link href='/users'>Users</Link>
				</li>
				<li>
					<SignInButton />
				</li>
				<AuthCheck>
					<li>
						<SignOutButton />
					</li>
				</AuthCheck>
			</ul>
		</nav>
	);
}
