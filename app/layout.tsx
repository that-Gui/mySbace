import NavComponent from '@/components/NavComponent/NavComponent';
import './globals.css';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import AuthProvider from './AuthProvider';

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
		<AuthProvider>
			<html lang='en'>
				<body className={myFont.className}>
					<div className='container'>
						<header>
							<NavComponent />
						</header>
						<main>{children}</main>
						<footer>
							<p>© 2003 mySbace</p>
						</footer>
					</div>
				</body>
			</html>
		</AuthProvider>
	);
}
