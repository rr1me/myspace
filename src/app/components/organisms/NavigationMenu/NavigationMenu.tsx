'use client';

import s from './NavigationMenu.module.scss';
import { createClassName } from '@/app/components/shared/utils';
import { colorVars, mohave } from '@/app/theme';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { animated, easings, useSpring } from '@react-spring/web';
import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';
import Link from 'next/link';
import Button from '@/app/components/atoms/Button/Button';

const btnClassName = createClassName(s.button, mohave.className);

const NavigationMenu = () => {
	const navMenuOpen = !useAnimationStore(s => s.navMenuOpen);
	const springs = useSpring({
		x: navMenuOpen ? '0' : '-100%',
		config: {
			easing: easings.easeInOutExpo
		}
	});

	const onBreakerClick = () => animationStore.setState(s => ({ ...s, navMenuOpen: !s.navMenuOpen }));

	return (
		<div className={s.wrapper}>
			<animated.nav style={springs} className={s.nav}>
				<LineBreaker onClick={onBreakerClick} sx={{
					right: -37,
					top: -1,
					height: 6,
					filter: 'drop-shadow(0px 0px 4px #FFB800)',
					cursor: 'pointer',
					transition: '300ms',
					'&:hover': {
						scale: '110%',
						filter: 'drop-shadow(0px 0px 8px #FFB800)'
					},
					'&:active': {
						scale: '95%'
					}
				}} color={colorVars.c_accent_gold} vertical />

				<LineBreaker sx={{
					top: -5, left: -1
				}} color={colorVars.c_main_third}/>
				<LineBreaker sx={{
					bottom: -5, right: -1,
					scale: '-1 -1'
				}}/>

				<Link href='/' className={btnClassName}>about me</Link>
				<Link href='/skills' className={btnClassName}>skills</Link>
				<Link href='/projects' className={btnClassName}>projects</Link>
				{/*<Link href='/experience' className={btnClassName}>experience</Link>*/}
				<Button>huemoe</Button>
			</animated.nav>
		</div>
	);
};

export default NavigationMenu;
