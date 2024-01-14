'use client';

import s from './BlueCross.module.scss';
import { animated, easings, useSpring } from '@react-spring/web';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import clsx from 'clsx';

const size = 40;

const BlueCross = ({ delay = 0, nonAnimated = false }: {delay?: number, nonAnimated?: boolean}) => {
	// const [horizontalSprings] = useSpring(() => ({
	// 	from: {
	// 		height: 0
	// 	},
	// 	to: {
	// 		height: size
	// 	},
	// 	config: {
	// 		easing: easings.easeInOutExpo
	// 	},
	// 	delay: 1200 + delay
	// }));
	// const [verticalSprings] = useSpring(() => ({
	// 	from: {
	// 		width: 0
	// 	},
	// 	to: {
	// 		width: size
	// 	},
	// 	config: {
	// 		easing: easings.easeInOutExpo
	// 	},
	// 	delay: 1400 + delay
	// }));

	const crossClassNames = clsx({
		[s.cross]: true,
		[s.animation]: !nonAnimated
	});

	return (
		<div className={s.wrapper}>
			<SxSC style={{
				width: 2,
				height: size,
				...(nonAnimated &&
					{
						animationDelay: 1200 + delay + 'ms',
						animationPlayState: 'running'
					}
				)
			}} className={crossClassNames}/>

			<SxSC style={{
				height: 2,
				width: size,
				...(nonAnimated &&
					{
						animationDelay: 1400 + delay + 'ms',
						animationPlayState: 'running'
					}
				)
			}} className={crossClassNames}/>
		</div>
	);
};

export default BlueCross;
