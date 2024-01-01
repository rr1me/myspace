import s from './TopElement.module.scss';
import BlueCrossArray from '@/app/components/molecules/BlueCrossArray/BlueCrossArray';
import LoadingLog from '@/app/components/molecules/LoadingLog/LoadingLog';

const TopElement = () => {
	return (
		<div className={s.topElement}>
			<BlueCrossArray quantity={17} customClassName={s.topCrossArea} delay={1300}/>
			<LoadingLog delay={2500}/>
		</div>
	);
};

export default TopElement;
