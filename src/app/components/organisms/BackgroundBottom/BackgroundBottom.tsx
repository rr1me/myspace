'use client';

import s from './BackgroundBottom.module.scss';
import CLI from '@/app/components/organisms/CLI/CLI';
import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import { animated, easings, useSpring } from '@react-spring/web';
import BlueCrossArray from '@/app/components/molecules/BlueCrossArray/BlueCrossArray';
import { createClassName } from '@/app/components/shared/utils';
import { orbitron } from '@/app/theme';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
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
			{/*<article className={createClassName(s.staticText, orbitron)}>*/}
			{/*	<SelfWritingText nixWrapped={false}>*/}
			{/*		100110100101101010 110100110001011010*/}
			{/*	</SelfWritingText>*/}
			{/*	<SelfWritingText nixWrapped={false}>*/}
			{/*		IMAGE NAME: BLACKLARCH 441.454 &nbsp;&nbsp;*/}
			{/*		IMAGE TYPE: KERNEL ISOLATED IMAGE &nbsp;&nbsp;*/}
			{/*		ICCXS COMPRESSED &nbsp;&nbsp;*/}
			{/*		LOAD ADDRESS: 000211244*/}
			{/*	</SelfWritingText>*/}
			{/*	<SelfWritingText nixWrapped={false}>*/}
			{/*		MODEL LINE&nbsp;&nbsp;1.2001A&nbsp;&nbsp;4801_252 22S0*/}
			{/*	</SelfWritingText>*/}
			{/*	<SelfWritingText nixWrapped={false}>*/}
			{/*		10034&nbsp;&nbsp;13 62 84 CP 10560&nbsp;&nbsp;49 85 08 92*/}
			{/*	</SelfWritingText>*/}
			{/*	<SelfWritingText nixWrapped={false}>*/}
			{/*		S11.S/N 7907.03 ALIAS: J.A.C.K*/}
			{/*	</SelfWritingText>*/}
			{/*</article>*/}
			<animated.div
				className={s.bottom}
				style={{
					...springs
				}}
			>
				<BlueCrossArray quantity={24}
					additionalClassName={s.leftCrosses}/>
				<div className={s.innerBottom}>
					<CLI />
					<div className={s.middle}>
						<BlueCrossArray quantity={9}
							additionalClassName={createClassName(s.undisplayedCrosses, s.middleCrosses)}/>
						<CryptoDataChecker />
					</div>
					<div className={createClassName(s.middle, s.reversed)}>
						<BlueCrossArray quantity={18}
							additionalClassName={createClassName(s.middleCrosses, s.lowestCrosses)}/>
						<Status/>
					</div>
				</div>
				<BlueCrossArray quantity={27} additionalClassName={s.rightCrosses}/>
			</animated.div>
		</section>
	);
};

export default BackgroundBottom;
