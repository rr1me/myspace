import s from './ExperienceBlock.module.scss';
import { createClassName } from '@/app/components/shared/utils';
import ExperienceInfo from '@/app/components/molecules/ExperienceInfo/ExperienceInfo';
import restyle from '@/app/components/shared/restyle';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import { colorVars } from '@/app/theme';
import { Place } from '@/app/components/organisms/Experience/Experience';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const Tab = restyle(TabToChange, {
	backgroundColor: colorVars.c_main_second,
	position: 'static',
	boxShadow: '0 0 7px 2px rgba(243, 38, 38, 0.5)'
});

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

const ExperienceBlock = ({ place: { name, position, responsibilities, dateMark }, last }:
	{place: Place, last: boolean}) => {
	return (
		<div className={s.content}>
			<p className={s.firstMark}>
				{dateMark.getUTCFullYear()}<br/>
				{months[dateMark.getMonth()]}
			</p>

			<div className={s.marks}>
				<div className={s.markTab}/>

				<p className={s.date}>eto data DATA</p>

				{last &&
						<>
							<div className={s.markTab}/>
							<p className={s.lastMark}>Now</p>
						</>
				}
			</div>

			<div className={s.inner}>
				<div className={s.title}>
					<div className={s.place}>
						<div className={s.horizTab}/>
						<p className={s.goldShadow}>
							{name}
						</p>
						<div className={s.horizTab}/>
					</div>

					<p className={createClassName(s.position, s.goldShadow)}>
						{position}
					</p>
				</div>

				<ExperienceInfo responsibilities={responsibilities}/>
			</div>
		</div>
	);
};

export default ExperienceBlock;
