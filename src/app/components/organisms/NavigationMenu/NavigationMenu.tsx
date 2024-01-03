'use client';

import s from './NavigationMenu.module.scss';
import Button from '@/app/components/atoms/Button/Button';
import { createClassName } from '@/app/components/shared/utils';
import { colorVars, mohave } from '@/app/theme';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { animated, easings, useSpring } from '@react-spring/web';

const btnClassName = createClassName(s.button, mohave.className);

const NavigationMenu = () => {
	const [springs, api] = useSpring(() => ({
		from: {
			x: '-100%',
		},
		config: {
			easing: easings.easeInOutExpo
		}
	}));

	const onBreakerClick = () => {
		api.start({
			x: springs.x.get() === '-100%' ? '0' : '-100%'
		});
	};

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

				<Button className={btnClassName}>about me</Button>
				<Button className={btnClassName}>skills</Button>
				<Button className={btnClassName}>projects</Button>
				<Button className={btnClassName}>experience</Button>
			</animated.nav>
		</div>
	);
};

export default NavigationMenu;
