'use client';

import s from './BlueCross.module.scss';
import { animated, easings, useSpring } from '@react-spring/web';

const size = 40;

// const wh = {
// 	width: 15,
// 	height: 2
// }

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
			{/*<LineBreaker sx={{*/}
			{/*	rotate: '-90deg',*/}
			{/*	...wh,*/}
			{/*	left: 10.5,*/}
			{/*	top: 6.6*/}
			{/*}} variant={LineBreakerVariant.startToEnd}/>*/}
			{/*<LineBreaker sx={{*/}
			{/*	rotate: '-90deg',*/}
			{/*	...wh,*/}
			{/*	left: 14.3,*/}
			{/*	top: 6.6*/}
			{/*}} variant={LineBreakerVariant.startToEnd} mirrored/>*/}
			{/**/}
			{/*<LineBreaker sx={{*/}
			{/*	...wh,*/}
			{/*	top: 16.9,*/}
			{/*	left: 0.3*/}
			{/*}} variant={LineBreakerVariant.startToEnd}/>*/}
			{/*<LineBreaker sx={{*/}
			{/*	...wh,*/}
			{/*	top: 21,*/}
			{/*	left: 0.3*/}
			{/*}} variant={LineBreakerVariant.startToEnd} mirrored/>*/}
			{/**/}
			{/*<LineBreaker sx={{*/}
			{/*	...wh,*/}
			{/*	top: 16.9,*/}
			{/*	left: 24.5*/}
			{/*}} variant={LineBreakerVariant.startToEnd}/>*/}
			{/*<LineBreaker sx={{*/}
			{/*	...wh,*/}
			{/*	top: 21,*/}
			{/*	left: 24.5*/}
			{/*}} variant={LineBreakerVariant.startToEnd} mirrored/>*/}
			{/**/}
			{/*<LineBreaker sx={{*/}
			{/*	rotate: '-90deg',*/}
			{/*	...wh,*/}
			{/*	left: 10.5,*/}
			{/*	top: 31.2*/}
			{/*}} variant={LineBreakerVariant.startToEnd}/>*/}
			{/*<LineBreaker sx={{*/}
			{/*	rotate: '-90deg',*/}
			{/*	...wh,*/}
			{/*	left: 14.3,*/}
			{/*	top: 31.2*/}
			{/*}} variant={LineBreakerVariant.startToEnd} mirrored/>*/}

			<animated.div style={{
				width: 2,
				// height: size,
				...horizontalSprings
			}} className={s.cross}/>

			<animated.div style={{
				// width: size,
				height: 2,
				...verticalSprings
			}} className={s.cross}/>
		</div>
	);
};

export default BlueCross;
