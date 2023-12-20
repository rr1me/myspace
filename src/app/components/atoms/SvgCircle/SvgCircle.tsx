import s from './SvgCircle.module.scss';

const SvgCircle = () => {
	return (
		<div className={s.circle}>
			<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2"
					 viewBox="0 0 2 2" fill="none">
				<circle cx="1" cy="1" r="1" fill="#23FAFF"/>
			</svg>
		</div>
	);
};

export default SvgCircle;
