'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';

const CryptoDataArray = () => {
	return (
		<div className={s.DataArray}>
			<HardMarquee getElement={getRandomElement}/>
		</div>
	);
};

export default CryptoDataArray;

const getRandomElement = () => (
	<>
		{Array(10).fill(0).map((_x, i) =>
			(<div className={s.data} key={i}>
				{Math.random().toFixed(5)}
			</div>))}
	</>
);
