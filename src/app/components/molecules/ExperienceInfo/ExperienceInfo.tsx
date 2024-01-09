import s from './ExperienceInfo.module.scss';

const ExperienceInfo = ({ responsibilities }: {responsibilities: string[]}) => {
	return (
		<div className={s.info}>

			<div className={s.infoInner}>
				<div className={s.infoTitle}>
					<p>Responsibility area</p>
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
			</div>

			<div className={s.decorationWrapper}>
				<div className={s.highDecoration} />
				<div className={s.skewedDecoration}>
					{Array(3).fill(<div className={s.skewed} />)}
				</div>
			</div>

		</div>
	);
};

export default ExperienceInfo;
