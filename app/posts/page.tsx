import type { Metadata } from 'next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'mySbace blogs page',
	description: 'mySbace community post content.',
};

interface Post {
	title: string;
	content: string;
	slug: string;
}

export default async function Posts() {
	const session = await getServerSession(authOptions);
	const postslist: Post[] = await fetch('http://localhost:3000/api/content', {
		cache: 'default',
	}).then((res) => res.json());

	if (!session) {
		return <p>You must be signed in...</p>;
	}
	return (
		<div className={styles.postspagecontainer}>
			<h1>Posts page</h1>
			<div className={styles.grid}>
				{postslist.map((post) => {
					return (
						<Link href={`/posts/${post.slug}`} className={styles.cardTitle}>
							<div className={styles.card}>
								<h3 className={styles.cardTitle}>{post.title}</h3>
								<p>{post.content}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
