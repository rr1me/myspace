'use client';

import s from './BlueCross.module.scss';
import { animated, easings, useSpring } from '@react-spring/web';

const size = 40;

const BlueCross = ({ delay = 0 }: {delay?: number}) => {
	const [horizontalSprings] = useSpring(() => ({
		from: {
			height: 0
		},
		to: {
			height: size
		},
		config: {
			easing: easings.easeInOutExpo
		},
		delay: 1200 + delay
	}));
	const [verticalSprings] = useSpring(() => ({
		from: {
			width: 0
		},
		to: {
			width: size
		},
		config: {
			easing: easings.easeInOutExpo
		},
		delay: 1400 + delay
	}));

	return (
		<div className={s.wrapper}>
			<animated.div style={{
				width: 2,
				...horizontalSprings
			}} className={s.cross}/>

			<animated.div style={{
				height: 2,
				...verticalSprings
			}} className={s.cross}/>
		</div>
	);
};

export default BlueCross;
