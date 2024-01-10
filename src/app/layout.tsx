import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import Background from '@/app/components/templates/Background/Background';
import StyledComponentsRegistry from '@/app/registry';
import { orbitron } from '@/app/theme';
import Preloader from '@/app/components/templates/Preloader/Preloader';
import Menu from '@/app/components/templates/Menu/Menu';

import 'overlayscrollbars/overlayscrollbars.css';
import './reset.css';
import './layout.scss';
import './vars.module.scss';

export const metadata: Metadata = {
	title: 'rr1me\'s space',
};

export const viewport: Viewport = {
	userScalable: false,
	initialScale: 0.6 //smaller scale reduces stutters on mobiles
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={orbitron}>
				<StyledComponentsRegistry>
					{/*<Background/>*/}
					<main className='main'>
						{/*<Preloader/>*/}
						<Menu>
							{children}
						</Menu>
					</main>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
