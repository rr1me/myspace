'use client';

import s from './BackgroundBottom.module.scss';
import CLI from '@/app/components/organisms/CLI/CLI';
import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import { animated, easings, useSpring } from '@react-spring/web';
import BlueCross from '@/app/components/atoms/BlueCross/BlueCross';
import clsx from 'clsx';
import BlueCrossArray from '@/app/components/atoms/BlueCrossArray/BlueCrossArray';

const BackgroundBottom = () => {

	const [springs] = useSpring(() => ({
		from: {
			y: '-130%',

		},
		to: {
			y: '0',
		},
		config:{
			duration: 1000,
			easing: easings.easeOutExpo,
		},
		delay: 1500
	}));

	return (
		<section className={s.wrapper}>
			<animated.div
				className={s.bottom}
				style={{
					...springs
				}}
			>
				<BlueCrossArray quantity={25} additionalClassName={s.leftCrosses}/>
				<div className={s.innerBottom}>
					<CLI />
					<div className={s.middle}>
						<BlueCrossArray quantity={6} additionalClassName={s.midCrosses}/>
						<CryptoDataChecker />
					</div>
					<BlueCrossArray quantity={20} additionalClassName={s.rightCrosses}/>
				</div>
			</animated.div>
			<BlueCrossArray quantity={50} additionalClassName={s.lowestCrosses}/>
		</section>
	);
};

export default BackgroundBottom;
