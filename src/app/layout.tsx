import type { Metadata } from 'next';
import { Mohave } from 'next/font/google';
import { ReactNode } from 'react';

import './reset.css';
import './layout.scss';
import './vars.module.scss';
import Background from '@/app/components/templates/Background/Background';

const mohave = Mohave({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'rr1me\'s space',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={mohave.className}>
				<Background/>
				{children}
			</body>
		</html>
	);
}
