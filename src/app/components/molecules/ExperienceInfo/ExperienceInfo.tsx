import s from './ExperienceInfo.module.scss';
import { Spring } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { animated } from '@react-spring/web';

const ExperienceInfo = (
	{
		responsibilities,
		stack,
		responsibilitiesSprings,
		name,
		position,
		time
	}:
	{
		responsibilities: string[],
		stack?: string[],
		responsibilitiesSprings: Spring,
		name: string,
		position: string,
		time: string
	}) => {

	const stackElement = (() =>
		stack ?
			<>
				<p className={s.infoTitle}>
					Technical stack:
				</p>

				<div className={s.responsibilities}>
					{stack.map(x => (
						<div key={x} className={s.responsibility}>
							<span className={s.dot}>•</span>
							<p>{x}</p>
						</div>
					))}
				</div>
			</> : undefined
	)();

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

				<p className={s.infoTitle}>
					Responsibility area:
				</p>

				<div className={s.responsibilities}>
					{responsibilities.map(x => (
						<div key={x} className={s.responsibility}>
							<span className={s.dot}>•</span>
							<p>{x}</p>
						</div>
					))}
				</div>

				{stackElement}
			</animated.div>

		</div>
	);
};

export default ExperienceInfo;
