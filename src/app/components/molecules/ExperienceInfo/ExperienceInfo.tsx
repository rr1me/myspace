import s from './ExperienceInfo.module.scss';
import { Springs } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { animated } from '@react-spring/web';

const ExperienceInfo = (
	{
		responsibilities,
		decorationSprings,
		responsibilitiesSprings,
		responsibilitiesTitleSprings,
		name,
		position,
		time
	}:
	{
		responsibilities: string[],
		decorationSprings: Springs,
		responsibilitiesSprings: Springs,
		responsibilitiesTitleSprings: Springs,
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
					<div style={responsibilitiesTitleSprings} className={s.exactInfoTitle}>
						<animated.p style={responsibilitiesTitleSprings}>Responsibility area:</animated.p>
					</div>
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
