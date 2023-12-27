'use client';

import s from './BackgroundBottom.module.scss';
import CLI from '@/app/components/organisms/CLI/CLI';
import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import { animated, easings, useSpring } from '@react-spring/web';
import BlueCross from '@/app/components/atoms/BlueCross/BlueCross';

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
				<div className={s.innerBottom}>
					<CLI />
					<CryptoDataChecker />
					<div className={s.crosses}>
						{Array(50).fill(<BlueCross delay={2000}/>)}
					</div>
				</div>
				{/*<div className={s.whereami}/>*/}
				{/*<div className={s.crosses}>*/}
				{/*	{Array(10).fill(<BlueCross delay={2000}/>)}*/}
				{/*</div>*/}
			</animated.div>
			{/*<div className={s.whereami}/>*/}
			<div className={s.crosses + ' ' + s.lowestCrosses}>
				{Array(50).fill(<BlueCross delay={2000}/>)}
			</div>
		</section>
	);
};

export default BackgroundBottom;
