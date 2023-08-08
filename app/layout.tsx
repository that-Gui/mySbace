import NavComponent from '@/components/NavComponent/NavComponent';
import './globals.css';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';

const myFont = Space_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'mySbace',
	description: 'Redesigning the web, one website at a time.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={myFont.className}>
				<header>
					<NavComponent />
				</header>
				<main>{children}</main>
				<footer>
					<p>© 2003 mySbace</p>
				</footer>
			</body>
		</html>
	);
}
