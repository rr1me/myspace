'use client';

import s from './Experience.module.scss';
import { rajdhani } from '@/app/theme';
import ExperienceBlock from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { createClassName, formatYearsAndMonths } from '@/app/components/shared/utils';
import { animated, easings } from '@react-spring/web';
import { useChainedSprings, useShowPageAnimation } from '@/app/components/shared/hooks';
import dayjs from 'dayjs';

const config = {
	duration: 1000,
	easing: easings.easeInOutQuint,
};

export type Place = {
	name: string,
	position: string,
	responsibilities: string[],
	stack?: string[],
	dateFrom: string,
	dateTo?: string
};

const Experience = ({ places }: { places: Place[] }) => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('experience');

	const [
		lineHeightSprings,
		lineOpacitySprings,
		horizLineSprings,
		vertLineSprings,
		dateSprings,
		responsibilitiesSprings] =
		useChainedSprings([
			{ options: [{ height: '0' }, { height: '100%' }, config], timing: 0 },
			{ options: [{ opacity: '0' }, { opacity: '100%' }, {
				duration: 300,
				easing: easings.easeInOutQuint,
			}], timing: 0 },
			{ options: [{ scaleX: '0' }, { scaleX: '100%' }, config], timing: 0.5 },
			{ options: [{ scaleY: '0' }, { scaleY: '100%' }, {
				duration: 800,
				easing: easings.easeInOutExpo
			}], timing: 0.8 },
			{ options: [{ opacity: 0 }, { opacity: 1 }, config], timing: 0.9 },
			{ options: [{ x: '-100%' }, { x: '0' }, config, onAnimationEnd], timing: 1.2 },
		], pageAnimation);

	const experienceLength = (() => {
		let length = 0;
		if (places.length < 2){
			const dateFrom = places[0].dateFrom;

			const dateTo = places[0].dateTo;
			length = dayjs(dateFrom).diff(dateTo, 'months');
		}
		else {
			for (let i = places.length - 1; i >= 0; i--) {
				const { dateFrom, dateTo: dateToOrNot } = places[i];
				const isLast = i === 0;
				const dateTo =
					!dateToOrNot ?
						isLast ? undefined : places[i - 1].dateFrom
						: dateToOrNot;

				length += dayjs(dateTo).diff(dayjs(dateFrom), 'months');
			}
		}

		return formatYearsAndMonths(Math.floor(length / 12), length % 12);
	})();

	return (
		<div className={createClassName(rajdhani, s.exp)}>

			<div className={s.lineWrapper}>
				<animated.div style={{ ...lineHeightSprings, ...lineOpacitySprings }} className={s.lineInner}>
					<svg width='14' height='7' className={s.arrow} viewBox='0 0 14 7'>
						<path d='M0 7L7 0L14 7L0 7Z' fill='#69F5FD' />
					</svg>
					<div className={s.line} />
					<svg width='8' height='8' className={s.circle} viewBox='0 0 8 8'>
						<circle cx='4' cy='4' r='4' fill='#69F5FD' />
					</svg>
				</animated.div>
			</div>

			<animated.p
				style={dateSprings}

				className={s.experienceLength}>
				Overall experience: {experienceLength}
			</animated.p>

			<div className={s.blocks}>
				{places.map((x, i) => (
					<ExperienceBlock
						horizLineSprings={horizLineSprings}
						vertLineSprings={vertLineSprings}
						dateSprings={dateSprings}
						responsibilitiesSprings={responsibilitiesSprings}
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
