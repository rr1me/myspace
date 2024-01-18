'use client';

import s from './Menu.module.scss';
import { ReactNode, useEffect } from 'react';
import NavigationMenu from '@/app/components/organisms/NavigationMenu/NavigationMenu';
import { animated, easings, useChain, useSpring, useSpringRef } from '@react-spring/web';
import clsx from 'clsx';
import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';
import MenuBorder from '@/app/components/molecules/MenuBorder/MenuBorder';

const config = {
	easing: easings.easeInOutQuint,
	duration: 1500
};

const Menu = ({ children }: {children: ReactNode}) => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);

	const springsWidthRef = useSpringRef();
	const springsWidth = useSpring({
		ref: springsWidthRef,
		from: { width: '0' },
		to: { width: '100%' },
		config: config
	});

	const springsHeightRef = useSpringRef();
	const springsHeight = useSpring({
		ref: springsHeightRef,
		from: { height: '0' },
		to: { height: '100%' },
		config
	});

	useChain(preloaderVisibility ? [] : [springsWidthRef, springsHeightRef], [5, 6.1]);

	useEffect(() => {
		// if (preloaderVisibility)
			animationStore.setStateSilently(s => ({ ...s, menuInitialized: true }));
	}, [preloaderVisibility]);

	useEffect(() => {
		console.log('kavo');
	});

	return (
		// <animated.div style={springs} className={clsx({
		// 	[s.menu]: true,
		// 	[s.invisible]: !preloaderVisibility
		// })}>
		// 	<NavigationMenu/>
		// 	{children}
		// </animated.div>
		<div className={clsx({
			[s.global]: true,
			[s.invisible]: preloaderVisibility
		})}>
			<animated.div style={{ ...springsWidth, ...springsHeight }} className={s.menuWrapper}>
				<div className={s.hardMenu}>
					<MenuBorder/>

					<div className={s.inner}>
						<NavigationMenu />
						<div className={s.content}>
							{children}
						</div>
					</div>
				</div>
			</animated.div>
		</div>
	)
	;
};

export default Menu;
