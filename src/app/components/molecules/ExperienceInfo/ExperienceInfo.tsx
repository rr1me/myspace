import s from './ExperienceInfo.module.scss';
import { Springs } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { animated } from '@react-spring/web';

const ExperienceInfo = ({ responsibilities, decorationSprings, responsibilitiesSprings,
	responsibilitiesTitleSprings }:
	{responsibilities: string[], decorationSprings: Springs, responsibilitiesSprings: Springs,
		responsibilitiesTitleSprings: Springs
	}) => {
	return (
		<div className={s.info}>

			<div className={s.infoInner}>
				<animated.div style={responsibilitiesSprings} className={s.content}>
					<div className={s.gradLight} />

					<div className={s.infoTitle}>
						<div style={responsibilitiesTitleSprings} className={s.exactInfoTitle}>
							<animated.p style={responsibilitiesTitleSprings}>Responsibility area</animated.p>
						</div>
						<div className={s.infoTitleTab} />
					</div>
					<div className={s.infoTab} />

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

			<animated.div style={decorationSprings} className={s.decorationWrapper}>
				<div className={s.highDecoration} />
				<div className={s.skewedDecoration}>
					{Array(3).fill(<div className={s.skewed} />)}
				</div>
			</animated.div>

		</div>
	);
};

export default ExperienceInfo;
