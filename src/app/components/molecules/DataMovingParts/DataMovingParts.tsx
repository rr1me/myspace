import s from './DataMovingParts.module.scss';
import Tab from '@/app/components/atoms/Tab/Tab';
import SxStyledComponent from '@/app/components/atoms/SxStyledComponent/SxStyledComponent';

const DataMovingParts = () => {
	return (
		<div className={s.dataMovingParts}>
			<Tab sx={{ $height: '100%', $width: 1, $left: 10 }}/>

			<SxStyledComponent $sx={{ width: 5, height: 5, backgroundColor: 'wheat' }}/>

		</div>
	);
};

export default DataMovingParts;
