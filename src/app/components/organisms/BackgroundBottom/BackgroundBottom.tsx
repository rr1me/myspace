'use client';

import s from './BackgroundBottom.module.scss';
import CLI from '@/app/components/organisms/CLI/CLI';
import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import { animated, easings, useSpring } from '@react-spring/web';
import BlueCrossArray from '@/app/components/molecules/BlueCrossArray/BlueCrossArray';
import { createClassName } from '@/app/components/shared/utils';
import Status from '@/app/components/organisms/Status/Status';

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
			<div className={s.bottom}>
				<BlueCrossArray quantity={24}
					additionalClassName={s.leftCrosses}/>
				<div className={s.innerBottom}>
					<animated.div style={springs}>
						<CLI />
					</animated.div>
					<div className={s.middle}>
						<BlueCrossArray quantity={9}
							additionalClassName={createClassName(s.undisplayedCrosses, s.middleCrosses)}/>
						<CryptoDataChecker/>
					</div>
					<div className={createClassName(s.middle, s.reversed)}>
						<BlueCrossArray quantity={18}
							additionalClassName={createClassName(s.middleCrosses, s.lowestCrosses)}/>
						<Status/>
					</div>
				</div>
				<BlueCrossArray quantity={27} additionalClassName={s.rightCrosses}/>
			</div>
		</section>
	);
};

export default BackgroundBottom;
