'use client';

import s from './BlueCross.module.scss';
import { animated, easings, useSpring } from '@react-spring/web';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const size = 40;

const BlueCross = ({ delay = 0 }: {delay?: number}) => {
	// const [horizontalSprings] = useSpring(() => ({
		// from: {
		// 	height: 0
		// },
		// to: {
		// 	height: size
		// },
		// config: {
		// 	easing: easings.easeInOutExpo
		// },
		// delay: 1200 + delay
	// }));
	// const [verticalSprings] = useSpring(() => ({
		// from: {
		// 	width: 0
		// },
		// to: {
		// 	width: size
		// },
		// config: {
		// 	easing: easings.easeInOutExpo
		// },
		// delay: 1400 + delay
	// }));

	return (
		<div className={s.wrapper}>
			<SxSC style={{
				width: 2,
				height: size,
				animationDelay: 1200 + delay + 'ms',
				// animationPlayState: 'running'
			}} className={s.cross}/>

			<SxSC style={{
				height: 2,
				width: size,
				animationDelay: 1400 + delay + 'ms',
				// animationPlayState: 'running'
			}} className={s.cross}/>
		</div>
	);
};

export default BlueCross;
