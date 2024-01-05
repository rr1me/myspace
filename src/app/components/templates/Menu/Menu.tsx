'use client';

import s from './Menu.module.scss';
import { ReactNode, useEffect, useRef } from 'react';
import NavigationMenu from '@/app/components/organisms/NavigationMenu/NavigationMenu';
import { animated, easings, useSpring, useSpringRef } from '@react-spring/web';
import clsx from 'clsx';
import { useAnimationStore } from '@/app/components/shared/syncStore';

const Menu = ({ children }: {children: ReactNode}) => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);
	const springsRef = useSpringRef();
	const springs = useSpring({
		ref: springsRef,
		to: {
			opacity: 1,
			scale: 1
		},
		config: {
			easing: easings.easeInOutExpo,
			duration: 3000
		},
		delay: 4000
	});

	const init = useRef(false);
	useEffect(() => {
		if (preloaderVisibility || init.current) return;

		springsRef.start();
		init.current = true;
	}, [preloaderVisibility]);

	return (
		<animated.section style={springs} className={clsx({
			[s.menu]: true,
			// [s.invisible]: preloaderVisibility
		})}>
			<NavigationMenu/>
			{children}
		</animated.section>
	);
};

export default Menu;
