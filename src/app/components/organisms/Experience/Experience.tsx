import s from './Experience.module.scss';
import { rajdhani } from '@/app/theme';
import ExperienceBlock from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { Dayjs } from 'dayjs';
import { createClassName } from '@/app/components/shared/utils';

export type Place = { name: string, position: string, responsibilities: string[], dateMark: Dayjs };
const Experience = ({ places }: {places: Place[]}) =>
	(
		<div className={createClassName(rajdhani, s.exp)}>

			<div className={s.lineWrapper}>
				<svg width='8' height='8' className={s.circle} viewBox='0 0 8 8' fill='none'>
					<circle cx='4' cy='4' r='4' fill='#69F5FD' />
				</svg>
				<div className={s.line} />
				<svg width='7' height='14' viewBox='0 0 7 14' fill='none'>
					<path d='M0 0L7 7L0 14V0Z' fill='#69F5FD' />
				</svg>
			</div>

			<div className={s.blocks}>
				{places.map((x, i) => (
					<ExperienceBlock key={x.name}
						place={x} last={i === places.length - 1 ? true : places[i + 1].dateMark} />
				))}
			</div>
		</div>
	);

export default Experience;
