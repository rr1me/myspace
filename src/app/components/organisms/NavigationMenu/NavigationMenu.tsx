'use client';

import s from './NavigationMenu.module.scss';
import Button from '@/app/components/atoms/Button/Button';
import { createClassName } from '@/app/components/shared/utils';
import { colorVars, mohave } from '@/app/theme';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { animated, easings, useSpring } from '@react-spring/web';
import { useRouter } from 'next/navigation';
import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';

const btnClassName = createClassName(s.button, mohave.className);

const NavigationMenu = () => {
	const navMenuOpen = useAnimationStore(s => s.navMenuOpen);
	const springs = useSpring({
		x: navMenuOpen ? '0' : '-100%',
		config: {
			easing: easings.easeInOutExpo
		}
	});

	const onBreakerClick = () => animationStore.setState(s => ({ ...s, navMenuOpen: !s.navMenuOpen }));
	const router = useRouter();
	const onButtonClick = (to: string) => () => router.push(to);

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

				<Button className={btnClassName} onClick={onButtonClick('/')}>about me</Button>
				<Button className={btnClassName} onClick={onButtonClick('/preview')}>skills</Button>
				<Button className={btnClassName} onClick={onButtonClick('/')}>projects</Button>
				<Button className={btnClassName} onClick={onButtonClick('/')}>experience</Button>
			</animated.nav>
		</div>
	);
};

export default NavigationMenu;
