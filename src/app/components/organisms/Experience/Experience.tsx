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

export type Place = { name: string, position: string,
	responsibilities: string[], dateMark: string };
const Experience = ({ places }: {places: Place[]}) => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('experience');

	let lineSprings: Springs, experienceHeadSprings: Springs, infoDecorationSprings: Springs,
		responsibilitiesSprings: Springs, responsibilitiesTitleSprings: Springs;

	if(pageAnimation){
		const lineSpringsRef = useSpringRef();
		const experienceHeadSpringsRef = useSpringRef();
		const infoDecorationSpringsRef = useSpringRef();
		const responsibilitiesSpringsRef = useSpringRef();
		const responsibilitiesTitleSpringsRef = useSpringRef();

		lineSprings = useSpring({
			ref: lineSpringsRef,
			from: {
				width: '0'
			},
			to: {
				width: '100%'
			},
			config
		});
		experienceHeadSprings = useSpring({
			ref: experienceHeadSpringsRef,
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			config
		});
		infoDecorationSprings = useSpring({
			ref: infoDecorationSpringsRef,
			from: {
				scaleY: 0
			},
			to: {
				scaleY: 1
			},
			config
		});
		responsibilitiesSprings = useSpring({
			ref: responsibilitiesSpringsRef,
			from: {
				x: '100%'
			},
			to: {
				x: '0'
			},
			config
		});
		responsibilitiesTitleSprings = useSpring({
			ref: responsibilitiesTitleSpringsRef,
			from: {
				y: '110%'
			},
			to: {
				y: '0'
			},
			config,
			onRest: onAnimationEnd
		});

		useChain([lineSpringsRef, experienceHeadSpringsRef, infoDecorationSpringsRef,
			responsibilitiesSpringsRef, responsibilitiesTitleSpringsRef],
		[0, 0.5, 0.8, 1.1, 1.5]);
	}

	return (
		<div className={createClassName(rajdhani, s.exp)}>

			<animated.div style={lineSprings} className={s.lineWrapper}>
				<svg width='8' height='8' className={s.circle} viewBox='0 0 8 8' fill='none'>
					<circle cx='4' cy='4' r='4' fill='#69F5FD' />
				</svg>
				<div className={s.line} />
				<svg width='7' height='14' viewBox='0 0 7 14' fill='none'>
					<path d='M0 0L7 7L0 14V0Z' fill='#69F5FD' />
				</svg>
			</animated.div>

			<div className={s.blocks}>
				{places.map((x, i) => (
					<ExperienceBlock infoDecorationSprings={infoDecorationSprings}
						experienceHeadSprings={experienceHeadSprings}
						responsibilitiesSprings={responsibilitiesSprings}
						responsibilitiesTitleSprings={responsibilitiesTitleSprings}
						key={x.name}
						place={x} last={i === places.length - 1 ? true : places[i + 1].dateMark} />
				))}
			</div>
		</div>
	);
};

export default Experience;
