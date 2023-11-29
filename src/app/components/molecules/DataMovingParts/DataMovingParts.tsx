import s from './DataMovingParts.module.scss';
import Tab from '@/app/components/atoms/Tab/Tab';

const DataMovingParts = () => {
	return (
		<div className={s.dataMovingParts}>
			<Tab sx={{ $height: '100%', $width: 1, $left: 10 }}/>


		</div>
	);
};

export default DataMovingParts;
