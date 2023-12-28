'use client';

import s from './Lamp.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSObject } from 'styled-components';
import { animated, easings, useSpring } from '@react-spring/web';

const Lamp = ({ sx, color = '#ffffff', delay = 0, duration }:
	{sx?: CSSObject, color?: string, delay?: number, duration?: number}) => {
	const [springs] = useSpring(() => ({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
		delay,
		config: {
			easing: easings.easeInOutExpo,
			duration
		}
	}));

	return (
		<animated.div style={{
			background: `radial-gradient(50% 50%, ${color}, transparent)`,
			...sx,
			...springs
		}} className={s.lamp}/>
	);
};

export default Lamp;
