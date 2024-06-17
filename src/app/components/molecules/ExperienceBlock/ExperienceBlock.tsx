import s from './ExperienceBlock.module.scss';
import { createClassName } from '@/app/components/shared/utils';
import ExperienceInfo from '@/app/components/molecules/ExperienceInfo/ExperienceInfo';
import { Place } from '@/app/components/organisms/Experience/Experience';
import dayjs, { Dayjs } from 'dayjs';
import { animated, SpringValue } from '@react-spring/web';
import clsx from 'clsx';

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
	// const days = endDate.diff(startDatePlusYears.add(months, 'month'), 'day');

	return `${years > 0 ? years + ` year${mto(years)}` : ''}` +
		`${months > 0 ? ', ' + months + ` month${mto(months)}` : ''}`
		// + `${days > 0 ? ', ' + days + ` day${mto(days)}` : ''}`;
};

export type Springs = Record<string, SpringValue<number> | SpringValue<string>> | undefined;
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

	console.log(dayjs(nextDate).diff(dateFromObject, 'years'));
	console.log(dateTo);
	return (
		<div className={clsx({
			[s.content]: true,
			[s.notSeamless]: dateTo !== undefined
		})}>
			{/*<animated.div style={experienceHeadSprings}>*/}
			{/*<p className={s.firstMark}>*/}
			{/*	{dateFromObject.year()}<br />*/}
			{/*	{months[dateFromObject.month()]}*/}
			{/*</p>*/}

			{/*<div className={s.marks}>*/}
			{/*<div className={s.markTab} />*/}

			{/*{typeof last === 'boolean' ?*/}
			{/*	<>*/}
			{/*		/!*<p className={s.date}>{getDiff(dateFromObject, dayjs())}</p>*!/*/}

			{/*		/!*<div className={s.markTab} />*!/*/}
			{/*		<p className={s.lastMark}>Now</p>*/}
			{/*	</>*/}
			{/*	:*/}
			{/*	<>*/}
			{/*<p className={s.date}>{getDiff(dateFromObject, dayjs(last))}</p>*/}
			{/*<div className={s.date}>*/}
			{/*	<p>{dateFromObject.year()}</p>*/}
			{/*	<p>{months[dateFromObject.month()]}</p>*/}
			{/*</div>*/}
			{/*</>*/}
			{/*}*/}
			{/*<div className={s.markTab} />*/}
			{/*</div>*/}

			<div className={createClassName(s.marks, (dateTo !== undefined || nextDate === 'none') ? s.marksMultiple : s.marksAlone)}>
				{(dateTo !== undefined || nextDate === 'none') &&
				dateTo !== undefined ?
					<div className={s.dateTo}>
						<p>{dateToObject.year()}</p>
						<p>{months[dateToObject.month()]}</p>
					</div>
					:
					<p className={s.dateTo}>
						Now
					</p>
				}
				<div className={s.dateFrom}>
					<p>{dateFromObject.year()}</p>
					<p>{months[dateFromObject.month()]}</p>
				</div>
			</div>
			<div className={s.tabLines}>
				{(dateTo !== undefined || nextDate === 'none') &&
						<div className={s.horizTab} />
				}
				<div className={s.markTab} />
				<div className={s.horizTab} />
			</div>

			{/*<div className={s.inner}>*/}
			{/*	<div className={s.title}>*/}
			{/*<div className={s.place}>*/}
			{/*	<div className={s.horizTab} />*/}
			{/*	<p className={s.goldShadow}>*/}
			{/*		{name}*/}
			{/*	</p>*/}
			{/*	<div className={s.horizTab} />*/}
			{/*</div>*/}

			{/*		<p className={s.goldShadow}>*/}
			{/*			{name}*/}
			{/*		</p>*/}

			{/*		<p className={s.goldShadow}>*/}
			{/*			{position}*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*</animated.div>*/}

			<ExperienceInfo
				decorationSprings={infoDecorationSprings}
				responsibilities={responsibilities}
				responsibilitiesSprings={responsibilitiesSprings}
				responsibilitiesTitleSprings={responsibilitiesTitleSprings}
				name={name}
				position={position}
				time={getDiff(dateFromObject,
					dateTo === '' ? nextDate === 'none' ? dayjs() : dayjs(nextDate)
						:
						dayjs(dateTo)
				)}
			/>
		</div>
	);
};

export default ExperienceBlock;
