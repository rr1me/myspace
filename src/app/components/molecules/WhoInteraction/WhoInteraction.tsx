'use client';

import s from './WhoInteraction.module.scss';
import Link from 'next/link';
import { createClassName } from '@/app/components/shared/utils';
import { animated, easings, useSpring } from '@react-spring/web';

const WhoInteraction = ({ pageAnimation, onAnimationEnd }:
	{pageAnimation: boolean, onAnimationEnd: () => void}) => {
	const springs = useSpring(pageAnimation ? {
		from: {
			y: '-100%'
		},
		to:{
			y: '0'
		},
		delay: 1500,
		config: {
			duration: 1000,
			easing: easings.easeOutExpo
		},
		onRest: onAnimationEnd
	} : {});

	return (
		<div className={s.wrapper}>
			<animated.div style={springs} className={s.interaction}>
				<div className={s.links}>
					<Link href='https://t.me/rr1me'
						target='_blank' className={createClassName(s.link, s.telegram)} />
					<Link href='https://github.com/rr1me'
						target='_blank' className={createClassName(s.link, s.github)} />
				</div>

				<button className={s.button}>
					DOWNLOAD CV
				</button>
			</animated.div>
		</div>
	);
};

export default WhoInteraction;
