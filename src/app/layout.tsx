import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/app/registry';
import { orbitron } from '@/app/theme';

import 'overlayscrollbars/overlayscrollbars.css';
import './reset.css';
import './layout.scss';
import './vars.module.scss';
import Space from '@/app/components/templates/Space/Space';

export const metadata: Metadata = {
	title: 'rr1me\'s space',
	description: 'rr1me\'s personal presentation space',
	creator: 'rr1me',
};

export const viewport: Viewport = {
	userScalable: false,
	initialScale: 0.7 //smaller scale reduces stutters on mobiles
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={orbitron}>
				<StyledComponentsRegistry>
					<Space>
						{children}
					</Space>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
