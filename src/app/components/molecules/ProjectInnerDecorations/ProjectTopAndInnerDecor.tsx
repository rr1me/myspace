import s from './ProjectTopAndInnerDecor.module.scss';

const ProjectTopAndInnerDecor = ({ header }: {header: string}) => {
	return (
		<>
			<div className={s.gradLamp} />

			<div className={s.bottomBorderTab} />
			<div className={s.rightBorderTab} />
			<div className={s.leftBorderTab} />

			<div className={s.title}>
				<h2>{header}</h2>
				<div className={s.titleTab} />
			</div>
		</>
	);
};

export default ProjectTopAndInnerDecor;
