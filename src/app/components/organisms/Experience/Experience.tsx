'use client';

import s from './Experience.module.scss';
import { rajdhani } from '@/app/theme';
import ExperienceBlock from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { createClassName } from '@/app/components/shared/utils';
import { animated, easings, useChain } from '@react-spring/web';
import { useShowPageAnimation, useSpringWithRef } from '@/app/components/shared/hooks';

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

	const [lineHeightSprings, lineHeightSpringsRef] =
		useSpringWithRef({ height: '0' }, { height: '100%' }, config);
	const [lineOpacitySprings, lineOpacitySpringsRef] =
		useSpringWithRef({ opacity: '0' }, { opacity: '100%' }, {
			duration: 300,
			easing: easings.easeInOutQuint
		});
	const [experienceHeadSprings, experienceHeadSpringsRef] =
		useSpringWithRef({ opacity: 0 }, { opacity: 1 }, config);
	const [infoDecorationSprings, infoDecorationSpringsRef] =
		useSpringWithRef({ scaleY: 0 }, { scaleY: 1 }, config);
	const [responsibilitiesSprings, responsibilitiesSpringsRef] =
		useSpringWithRef({ x: '100%' }, { x: '0' }, config);
	const [responsibilitiesTitleSprings, responsibilitiesTitleSpringsRef] =
		useSpringWithRef({ y: '110%' }, { y: '0' }, config, onAnimationEnd);

	if(!pageAnimation){
		useChain([lineHeightSpringsRef, experienceHeadSpringsRef, infoDecorationSpringsRef,
			responsibilitiesSpringsRef, responsibilitiesTitleSpringsRef],
		[0, 0.5, 0.8, 1.1, 1.5]);
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
						nextDate={i !== 0 ? places[i - 1].dateFrom : 'none'}
					/>
				))}
			</div>
		</div>
	);
};

export default Experience;
