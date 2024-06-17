import s from './ExperienceInfo.module.scss';
import { Spring } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { animated } from '@react-spring/web';

const ExperienceInfo = (
	{
		responsibilities,
		responsibilitiesSprings,
		name,
		position,
		time
	}:
	{
		responsibilities: string[],
		responsibilitiesSprings: Spring,
		name: string,
		position: string,
		time: string
	}) => {
	return (
		<div className={s.info}>
			<animated.div style={responsibilitiesSprings} className={s.content}>

				<div className={s.title}>
					<p>
						{name}
					</p>
					<p>
						{position}
					</p>
				</div>

				<p>{time}</p>

				<div className={s.infoTitle}>
					<p className={s.exactInfoTitle}>
						Responsibility area:
					</p>
				</div>

				<div className={s.responsibilities}>
					{responsibilities.map(x => (
						<div key={x} className={s.responsibility}>
							<span className={s.dot}>•</span>
							<p>{x}</p>
						</div>
					))}
				</div>
			</animated.div>

		</div>
	);
};

export default ExperienceInfo;
