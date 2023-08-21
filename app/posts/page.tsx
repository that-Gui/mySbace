import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'mySbace blogs page',
	description: 'mySbace community blog content.',
};

interface Post {
	title: string;
	content: string;
	slug: string;
}

export default async function Posts() {
	// const session = await getServerSession();
	const postlist: Post[] = await fetch('http://localhost:3000/api/content', {
		cache: 'default',
	}).then((res) => res.json());

	/* if (!session) {
		return <p>You must be signed in...</p>;
	} */
	return (
		<div>
			<h1>Posts page</h1>
			<div className={styles.grid}>
				{postlist.map((post) => {
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
