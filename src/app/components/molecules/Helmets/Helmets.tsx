'use client';

import s from './Helmets.module.scss';
import { animated, easings, useSpring } from '@react-spring/web';
import { useState } from 'react';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const cfg = {
	config: {
		easing: easings.easeInOutExpo,
	}
};

const Helmets = ({ width }: {width: number}) => {
	const centering = width / 2 - 50 / 2;
	const remainSpace = (width - 70) / 2;

	const [shadow, setShadow] = useState(false);

	const [leftSprings, api] = useSpring(() => ({
		from: {
			opacity: 0,
			width: '50px',
			left: centering + 'px'
		},
		to: {
			width: remainSpace + 'px',
			left: '0'
		},
		...cfg,
		pause: true
	}));
	const [rightSprings, apiRight] = useSpring(() => ({
		from: {
			opacity: 0,
			width: '50px',
			left: centering + 'px'
		},
		to: {
			width: remainSpace + 'px',
			left: centering + 60 + 'px'
		},
		...cfg,
		pause: true
	}));
	const [centerSprings] = useSpring(() => ({
		from: {
			y: '220%'
		},
		to: {
			y: '0'
		},
		...cfg,
		delay: 1000,
		onRest: () => {
			api.set({ opacity: 1 });
			api.resume();
			apiRight.set({ opacity: 1 });
			apiRight.resume();
			setShadow(true);
		}
	}));

	const classNameHelmet = clsx({
		[s.helmet]: true,
		[s.afterVisible]: shadow
	});

	return (
		<SxSC $sx={{ width, position: 'relative',
			overflow: shadow ? 'unset' : 'hidden' }}>
			<animated.div style={{
				...leftSprings
			}} className={classNameHelmet}/>
			<animated.div style={{
				width: 50,
				left: centering,
				...centerSprings
			}} className={classNameHelmet}/>
			<animated.div style={{
				...rightSprings
			}} className={classNameHelmet}/>
		</SxSC>
	);
};

export default Helmets;
