'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import getRandomCryptoArrayTile from '@/app/components/molecules/getRandomCryptoArrayTile/getRandomCryptoArrayTile';

const CryptoDataArray = () => {
	return (
		<div className={s.dataArray}>
			<HardMarquee getElement={getRandomCryptoArrayTile} delay={3300}/>
		</div>
	);
};

export default CryptoDataArray;
