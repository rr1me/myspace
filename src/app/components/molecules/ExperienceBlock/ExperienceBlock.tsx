import s from './ExperienceBlock.module.scss';
import { createClassName } from '@/app/components/shared/utils';
import ExperienceInfo from '@/app/components/molecules/ExperienceInfo/ExperienceInfo';
import { Place } from '@/app/components/organisms/Experience/Experience';
import dayjs, { Dayjs } from 'dayjs';
import clsx from 'clsx';
import { PickAnimated, SpringValues } from '@react-spring/core';

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

const mto = (n: number) => n > 1 ? 's' : '';

const getDiff = (startDate: Dayjs, endDate: Dayjs) => {
	const years = endDate.diff(startDate, 'year');
	const startDatePlusYears = startDate.add(years, 'year');
	const months = endDate.diff(startDatePlusYears, 'month');

	return `${years > 0 ? `${years} year${mto(years)}` : ''}` +
		`${months > 0 ? `${years > 0 ? ', ' : ''}${months} month${mto(months)}` : ''}`;
};

export type Springs = SpringValues<PickAnimated<object>> | undefined;
const ExperienceBlock = (
	{ place: { name, position, responsibilities, dateFrom, dateTo },
		nextDate,
		experienceHeadSprings,
		infoDecorationSprings,
		responsibilitiesSprings,
		responsibilitiesTitleSprings
	}:
	{place: Place,
		nextDate: string,
		experienceHeadSprings: Springs,
		infoDecorationSprings: Springs,
		responsibilitiesSprings: Springs,
		responsibilitiesTitleSprings: Springs
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
			[s.notSeamless]: dateTo !== undefined,
		})}>

			<div className={createClassName(s.marks, firstOrNotSeamless ? s.marksMultiple : s.marksAlone)}>
				{endDateElement}
				<div className={s.dateFrom}>
					<p>{dateFromObject.year()}</p>
					<p>{months[dateFromObject.month()]}</p>
				</div>
			</div>

			<div className={s.tabLines}>
				{firstOrNotSeamless && <div className={s.horizTab} />}
				<div className={s.markTab} />
				<div className={s.horizTab} />
			</div>

			<ExperienceInfo
				decorationSprings={infoDecorationSprings}
				responsibilities={responsibilities}
				responsibilitiesSprings={responsibilitiesSprings}
				responsibilitiesTitleSprings={responsibilitiesTitleSprings}
				name={name}
				position={position}
				time={time}
			/>
		</div>
	);
};

export default ExperienceBlock;
