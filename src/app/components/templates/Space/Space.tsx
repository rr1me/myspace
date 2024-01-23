'use client';

import s from './Space.module.scss';
import Background from '@/app/components/templates/Background/Background';
import Preloader from '@/app/components/templates/Preloader/Preloader';
import Menu from '@/app/components/templates/Menu/Menu';
import { ReactNode, useEffect, useState } from 'react';
import { useAnimationStore } from '@/app/components/shared/syncStore';
import clsx from 'clsx';

const Space = ({ children }: {children: ReactNode}) => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);
	const [isMobile, setIsMobile] = useState<null | boolean>(null);

	useEffect(() => {
		let hasTouchScreen: boolean;
		if ('maxTouchPoints' in navigator)
			hasTouchScreen = navigator.maxTouchPoints > 0;
		else if ('msMaxTouchPoints' in navigator)
			// @ts-expect-error it's possibly exist
			hasTouchScreen = navigator.msMaxTouchPoints > 0;
		else {
			const mQ = matchMedia('(pointer:coarse)');
			if (mQ && mQ.media === '(pointer:coarse)')
				hasTouchScreen = mQ.matches;
			else if ('orientation' in window)
				hasTouchScreen = true;
			else {
				// @ts-expect-error it's exist
				const UA = navigator.userAgent;
				hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
					/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
			}
		}
		if (hasTouchScreen) setIsMobile(true);
		else setIsMobile(false);
	}, []);

	const isMounted = typeof isMobile === 'boolean';

	return (
		<>
			{isMounted && <Background isMobile={isMobile} />}
			<main className={clsx({
				[s.main]: true,
				[s.mainAdaptive]: !preloaderVisibility
			})}>
				<Preloader/>
				{isMounted &&
						<Menu isMobile={isMobile}>
							{children}
						</Menu>
				}
			</main>
		</>
	);
};

export default Space;
