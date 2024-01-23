'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import getRandomCryptoArrayTile from '@/app/components/molecules/getRandomCryptoArrayTile/getRandomCryptoArrayTile';

const CryptoDataArray = ({ isMobile }: {isMobile: boolean}) => {
	return (
		<div className={s.dataArray}>
			<HardMarquee element={getRandomCryptoArrayTile()} delay={3300} intervalDelay={isMobile ? 600 : 300}/>
		</div>
	);
};

export default CryptoDataArray;
