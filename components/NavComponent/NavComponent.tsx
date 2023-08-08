import Link from 'next/link';
import Image from 'next/image';
import styles from './NavComponent.module.css';

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
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/users'>Users</Link>
				</li>
			</ul>
		</nav>
	);
}
