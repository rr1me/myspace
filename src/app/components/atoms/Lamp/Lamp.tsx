'use client';

import s from './Lamp.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSObject, CSSProperties } from 'styled-components';
import { animated, easings, useSpring } from '@react-spring/web';

type Lamp = { sx?: CSSObject, color?: string, delay?: number, duration?: number };

const Lamp = ({ sx, color = '#ffffff', delay = 0, duration, nonAnimated, falloff }: Lamp & {nonAnimated?: boolean, falloff?: number}) => {
	const style: CSSObject = {
		zIndex: -1,
		background: falloff ?
			`radial-gradient(circle, ${color} 0%, ${color} ${falloff}%, transparent 70%)`
			:
			`radial-gradient(50% 50%, ${color}, transparent)`,
		...sx,
	};

	return nonAnimated ?
		<SxSC $sx={style} className={s.lamp}/>
		:
		<Animated style={style} delay={delay} duration={duration}/>;
};

export default Lamp;

const Animated = ({ style, delay = 0, duration }:
	Pick<Lamp, 'delay' | 'duration'> & {style: CSSProperties}) => {
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
			...style,
			...springs
		}} className={s.lamp}/>
	);
};
