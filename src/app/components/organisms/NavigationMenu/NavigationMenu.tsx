'use client';

import s from './NavigationMenu.module.scss';
import { colorVars } from '@/app/theme';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { animated, easings, useSpring } from '@react-spring/web';
import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';
import Button, { ButtonClrVariation } from '@/app/components/atoms/Button/Button';
import LineLink from '@/app/components/atoms/LineLink/LineLink';
import { applyProps } from '@/app/components/shared/restyle';

const NavigationMenu = () => {
	const navMenuOpen = !useAnimationStore(s => s.navMenuOpen);
	const springs = useSpring({
		x: navMenuOpen ? '0' : '-100%',
		config: {
			easing: easings.easeInOutExpo
		}
	});

	// const [used, setUsed] = useState(false);
	const onBreakerClick = () => {
		animationStore.setState(s => ({ ...s, navMenuOpen: !s.navMenuOpen }));

		// if (!used) setUsed(true);
	};

	const onLinkClick = () =>
		animationStore.setStateSilently(s => ({ ...s, pageAnimation: true }));

	const ButtonElement = applyProps(Button, {
		colorVariation: ButtonClrVariation.chosenByLink,
		onClick: onLinkClick
	});

	return (
		<>
			<header className={s.lineMenu}>
				<div className={s.tab} />
				<nav className={s.lineLinks}>
					<LineLink onClick={onLinkClick} href='/'>about me</LineLink>
					<LineLink onClick={onLinkClick} href='/skills'>skills</LineLink>
					<LineLink onClick={onLinkClick} href='/projects'>projects</LineLink>
					<LineLink onClick={onLinkClick} href='/experience'>experience</LineLink>
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
							scale: '120%',
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

					{/*<div className={clsx({*/}
					{/*	[s.mark]: true,*/}
					{/*	[s.invisible]: used*/}
					{/*})}>*/}
					{/*	<div className={s.radialMark}/>*/}
					{/*</div>*/}

					<ButtonElement link='/'>about me</ButtonElement>
					<ButtonElement link='/skills'>skills</ButtonElement>
					<ButtonElement link='/projects'>projects</ButtonElement>
					<ButtonElement link='/experience'>experience</ButtonElement>
				</animated.nav>
			</div>
		</>
	);
};

export default NavigationMenu;
