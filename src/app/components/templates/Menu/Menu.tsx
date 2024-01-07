'use client';

import s from './Menu.module.scss';
import { ReactNode, useEffect } from 'react';
import NavigationMenu from '@/app/components/organisms/NavigationMenu/NavigationMenu';
import { animated, easings, useSpring, useSpringRef } from '@react-spring/web';
import clsx from 'clsx';
import { useAnimationStore } from '@/app/components/shared/syncStore';
import { colorVars } from '@/app/theme';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { createClassName } from '@/app/components/shared/utils';

const Tab = restyle(TabToChange, {
	backgroundColor: colorVars.c_main_second,
	height: 2,
	width: 'calc(100% - 16px)'
});

const Menu = ({ children }: {children: ReactNode}) => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);
	const springsRef = useSpringRef();
	const springs = useSpring({
		// ref: springsRef,
		// from: {
		// 	opacity: 0,
		// 	scale: 0
		// },
		// to: {
		// 	opacity: 1,
		// 	scale: 1
		// },
		// config: {
		// 	easing: easings.easeInOutExpo,
		// 	duration: 3000
		// },
		// delay: 4000
	});
	// useEffect(() => {
	// 	if (!preloaderVisibility) springsRef.start();
	// }, [preloaderVisibility]);

	return (
		// <animated.div style={springs} className={clsx({
		// 	[s.menu]: true,
		// 	[s.invisible]: !preloaderVisibility
		// })}>
		// 	<NavigationMenu/>
		// 	{children}
		// </animated.div>
		<animated.div className={s.hardMenu}>
			<div className={s.border}>
				<svg height='100%' width='100%' fill='none' preserveAspectRatio="none">
					<svg width='15' fill='none' x='calc(100% - 18px)' className={s.fix} preserveAspectRatio="none">
						<svg width='15' height='212' fill='none' preserveAspectRatio="none">
							<path d='M3 212V209L13.5 198.5V11.5L3 1H0.5'
								stroke={colorVars.c_main_second} strokeWidth='2' />
						</svg>
						<rect height='calc(100% - 212px)' x='2' y='212' width='2'
							fill={colorVars.c_main_second} />
					</svg>
					<rect x='0' y='0' width='2' height='100%'
						fill={colorVars.c_main_second} />
				</svg>
				<Tab sx={{ top: 0 }}/>
				<Tab sx={{ bottom: 0 }}/>

				{/*<Tab sx={{*/}
				{/*	right: 3,*/}
				{/*	width: 8,*/}
				{/*	height: 579,*/}
				{/*	bottom: 15,*/}
				{/*	transform: 'skew(0, -45deg)'*/}
				{/*}}/>*/}
				<div className={s.rightLineBreaker}/>
				<div className={s.rlbTextWrapper}>
					<p className={s.rlbText}>CONNECTION 221-09-43</p>
					<p className={s.rlbText}>CONNECTED VIA PROTOCOL 20X-044-423</p>
				</div>

				{/*<p className={s.tabText}>CONNECTION 221-09-43</p>*/}
				{/*<p className={s.tabTextSecond}>CONNECTED VIA PROTOCOL 20X-044-423</p>*/}


				<div className={s.lineBreaker} />
				<div className={s.lineBreakerLight}/>
				<div className={s.bigBreaker}>
					<p className={s.bbText}>
						ICE INTEGRITY 100.1%&emsp;&emsp;ROUTE PROTECTED
					</p>
				</div>
			</div>
			<div className={s.inner}>
				menu
			</div>
		</animated.div>
	)
	;
};

export default Menu;
