'use client';

import s from './Experience.module.scss';
import { rajdhani } from '@/app/theme';
import ExperienceBlock, { Springs } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { createClassName } from '@/app/components/shared/utils';
import { animated, easings, useChain, useSpring, useSpringRef } from '@react-spring/web';
import { useShowPageAnimation } from '@/app/components/shared/hooks';

const config = {
	duration: 1000,
	easing: easings.easeInOutQuint
};

export type Place = {
	name: string,
	position: string,
	responsibilities: string[],
	dateFrom: string,
	dateTo?: string
};

const Experience = ({ places }: {places: Place[]}) => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('experience');

	let lineHeightSprings: Springs,
		lineOpacitySprings: Springs,
		experienceHeadSprings: Springs,
		infoDecorationSprings: Springs,
		responsibilitiesSprings: Springs,
		responsibilitiesTitleSprings: Springs;

	if(!pageAnimation){
		const lineHeightSpringsRef = useSpringRef();
		const lineOpacitySpringsRef = useSpringRef();
		const experienceHeadSpringsRef = useSpringRef();
		const infoDecorationSpringsRef = useSpringRef();
		const responsibilitiesSpringsRef = useSpringRef();
		const responsibilitiesTitleSpringsRef = useSpringRef();

		lineHeightSprings = useSpring({
			// ref: lineHeightSpringsRef,
			from: {
				height: '0',
			},

			to: {
				height: '100%',
			},
			config
		});
		lineOpacitySprings = useSpring({
			// ref: lineOpacitySpringsRef,
			from: {
				opacity: '0',
			},

			to: {
				opacity: '1',
			},
			config: {
				duration: 300,
				easing: easings.easeInOutQuint
			}
		});
		experienceHeadSprings = useSpring({
			// ref: experienceHeadSpringsRef,
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			config
		});
		infoDecorationSprings = useSpring({
			// ref: infoDecorationSpringsRef,
			from: {
				scaleY: 0
			},
			to: {
				scaleY: 1
			},
			config
		});
		responsibilitiesSprings = useSpring({
			// ref: responsibilitiesSpringsRef,
			from: {
				x: '100%'
			},
			to: {
				x: '0'
			},
			config
		});
		responsibilitiesTitleSprings = useSpring({
			// ref: responsibilitiesTitleSpringsRef,
			from: {
				y: '110%'
			},
			to: {
				y: '0'
			},
			config,
			onRest: onAnimationEnd
		});

		// useChain([lineHeightSpringsRef, experienceHeadSpringsRef, infoDecorationSpringsRef,
		// 	responsibilitiesSpringsRef, responsibilitiesTitleSpringsRef],
		// [0, 0.5, 0.8, 1.1, 1.5]);
	}

	return (
		<div className={createClassName(rajdhani, s.exp)}>

			<div className={s.testWrapper}>
				<animated.div style={{ ...lineHeightSprings, ...lineOpacitySprings }} className={s.lineWrapper}>
					<svg width="14" height="7" className={s.arrow} viewBox="0 0 14 7">
						<path d="M0 7L7 0L14 7L0 7Z" fill="#69F5FD"/>
					</svg>
					<div className={s.line} />
					<svg width='8' height='8' className={s.circle} viewBox='0 0 8 8'>
						<circle cx='4' cy='4' r='4' fill='#69F5FD' />
					</svg>
				</animated.div>
			</div>

			<div className={s.blocks}>
				{places.map((x, i) => (
					<ExperienceBlock infoDecorationSprings={infoDecorationSprings}
						experienceHeadSprings={experienceHeadSprings}
						responsibilitiesSprings={responsibilitiesSprings}
						responsibilitiesTitleSprings={responsibilitiesTitleSprings}
						key={x.name}
						place={x}
						// nextDate={i === places.length - 1 ? 'none' : places[i + 1].dateMark}
						nextDate={i !== 0 ? places[i - 1].dateFrom : 'none'}
					/>
				))}
			</div>
		</div>
	);
};

export default Experience;
