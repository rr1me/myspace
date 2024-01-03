import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import './reset.css';
import './layout.scss';
import './vars.module.scss';
import Background from '@/app/components/templates/Background/Background';
import StyledComponentsRegistry from '@/app/registry';
import { AnimationProvider } from '@/app/components/shared/AnimationContext';
import { orbitron } from '@/app/theme';

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
			<body className={orbitron.className}>
				<StyledComponentsRegistry>
					<AnimationProvider>
						<Background/>
						<main className='main'>
							{children}
						</main>
					</AnimationProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
