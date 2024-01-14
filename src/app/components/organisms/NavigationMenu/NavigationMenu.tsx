'use client';

import s from './NavigationMenu.module.scss';
import { colorVars, rajdhani } from '@/app/theme';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { animated, easings, useSpring } from '@react-spring/web';
import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';
import Button from '@/app/components/atoms/Button/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClassName } from '@/app/components/shared/utils';
import LineLink from '@/app/components/atoms/LineLink/LineLink';

const NavigationMenu = () => {
	const navMenuOpen = !useAnimationStore(s => s.navMenuOpen);
	const springs = useSpring({
		x: navMenuOpen ? '0' : '-100%',
		config: {
			easing: easings.easeInOutExpo
		}
	});

	const onBreakerClick = () =>
		animationStore.setState(s => ({ ...s, navMenuOpen: !s.navMenuOpen }));

	const router = useRouter();
	const onLinkClick = (to: string) => () => router.push(to);

	return (
		<>
			<header className={s.lineMenu}>
				<div className={s.tab} />
				<nav className={s.lineLinks}>
					<LineLink href='/'>about me</LineLink>
					<LineLink href='/skills'>skills</LineLink>
					<LineLink href='/projects'>projects</LineLink>
					<LineLink href='/experience'>experience</LineLink>
				</nav>
				<div className={s.tab} />
			</header>
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
					}} color={colorVars.c_main_third} />
					<LineBreaker sx={{
						bottom: -5, right: -1,
						scale: '-1 -1'
					}} />
					<Button onClick={onLinkClick('/')}>about me</Button>
					<Button onClick={onLinkClick('/skills')}>skills</Button>
					<Button onClick={onLinkClick('/projects')}>projects</Button>
					<Button onClick={onLinkClick('/experience')}>experience</Button>
				</animated.nav>
			</div>
		</>
	);
};

export default NavigationMenu;
