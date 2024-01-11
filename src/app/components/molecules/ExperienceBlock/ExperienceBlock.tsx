import s from './ExperienceBlock.module.scss';
import { createClassName } from '@/app/components/shared/utils';
import ExperienceInfo from '@/app/components/molecules/ExperienceInfo/ExperienceInfo';
import { Place } from '@/app/components/organisms/Experience/Experience';
import dayjs, { Dayjs } from 'dayjs';

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
	const duration = endDate.diff(startDate, 'day');

	const years = Math.floor(duration / 365);
	const months = Math.floor((duration % 365) / 30);
	const days = duration % 30;

	return `${years > 0 ? years + ` year${mto(years)}, ` : ''}
	${months > 0 ? months + ` month${mto(months)}, ` : ''}
	${days > 0 ? days + ` day${mto(days)}` : 'recently'}`;
};

const ExperienceBlock = ({ place: { name, position, responsibilities, dateMark }, last }:
	{place: Place, last: boolean | Dayjs}) =>
	(
		<div className={s.content}>
			<p className={s.firstMark}>
				{dateMark.year()}<br />
				{months[dateMark.month()]}
			</p>

			<div className={s.marks}>
				<div className={s.markTab} />

				{typeof last === 'boolean' ?
					<>
						<p className={s.date}>{getDiff(dateMark, dayjs())}</p>

						<div className={s.markTab} />
						<p className={s.lastMark}>Now</p>
					</>
					:
					<>
						<p className={s.date}>{getDiff(dateMark, last)}</p>
					</>
				}
			</div>

			<div className={s.inner}>
				<div className={s.title}>
					<div className={s.place}>
						<div className={s.horizTab} />
						<p className={s.goldShadow}>
							{name}
						</p>
						<div className={s.horizTab} />
					</div>

					<p className={createClassName(s.position, s.goldShadow)}>
						{position}
					</p>
				</div>

				<ExperienceInfo responsibilities={responsibilities} />
			</div>
		</div>
	);

export default ExperienceBlock;
