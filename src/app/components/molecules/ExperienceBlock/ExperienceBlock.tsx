import s from './ExperienceBlock.module.scss';
import { createClassName, getDiff } from '@/app/components/shared/utils';
import ExperienceInfo from '@/app/components/molecules/ExperienceInfo/ExperienceInfo';
import { Place } from '@/app/components/organisms/Experience/Experience';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { PickAnimated, SpringValues } from '@react-spring/core';
import { animated } from '@react-spring/web';

const ExperienceBlock = (
	{ place: { name, position, responsibilities, dateFrom, dateTo },
		nextDate,
		responsibilitiesSprings,
		horizLineSprings,
		vertLineSprings,
		dateSprings
	}:
	{
		place: Place,
		nextDate: string,
		responsibilitiesSprings: Spring,
		horizLineSprings: Spring,
		vertLineSprings: Spring,
		dateSprings: Spring
	}) => {
	const dateFromObject = dayjs(dateFrom);
	const dateToObject = dayjs(dateTo);

	const isSeamless = dateTo === undefined;
	const isFirst = nextDate === 'none';
	const firstOrNotSeamless = isFirst || !isSeamless;

	const endDateElement = (() => {
		if (isFirst)
			return (
				<p className={s.dateTo}>
					Now
				</p>
			);
		if (!isSeamless)
			return (
				<div className={s.dateTo}>
					<p>{dateToObject.year()}</p>
					<p>{months[dateToObject.month()]}</p>
				</div>
			);
		return;
	})();

	const time = (() => {
		let dateToDiff;
		if (!isSeamless)
			dateToDiff = dateTo;
		else if (!isFirst)
			dateToDiff = nextDate;
		return getDiff(dateFromObject, dayjs(dateToDiff));
	})();

	return (
		<div className={clsx({
			[s.content]: true,
			[s.notSeamless]: !isSeamless,
		})}>

			<animated.div style={dateSprings} className={createClassName(s.dates,
				firstOrNotSeamless ? s.datesMultiple : s.datesAlone)}>
				{endDateElement}
				<div className={s.dateFrom}>
					<p>{dateFromObject.year()}</p>
					<p>{months[dateFromObject.month()]}</p>
				</div>
			</animated.div>

			<div className={s.tabLines}>
				{firstOrNotSeamless && <animated.div style={horizLineSprings} className={s.horizTab} />}
				<animated.div style={vertLineSprings} className={s.vertTab} />
				<animated.div style={horizLineSprings} className={s.horizTab} />
			</div>

			<ExperienceInfo
				responsibilities={responsibilities}
				responsibilitiesSprings={responsibilitiesSprings}
				name={name}
				position={position}
				time={time}
			/>
		</div>
	);
};

export default ExperienceBlock;

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

export type Spring = SpringValues<PickAnimated<object>> | undefined;
