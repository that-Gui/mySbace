import Link from 'next/link';
import styles from './UserCard.module.css';

interface Props {
	id: string;
	name: string | null;
	image: string | null;
}

export default function UserCard({ id, name, image }: Props) {
	return (
		<Link href={`/users/${id}`}>
			<div className={styles.card}>
				<img
					src={image ?? '/mememan.webp'}
					alt={`${name}'s profile`}
					className={styles.cardImage}
				/>
				<div className={styles.cardContent}>
					<h3>{name}</h3>
				</div>
			</div>
		</Link>
	);
}
