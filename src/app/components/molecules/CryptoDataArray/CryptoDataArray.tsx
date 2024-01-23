'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import getRandomCryptoArrayTile from '@/app/components/molecules/getRandomCryptoArrayTile/getRandomCryptoArrayTile';

const CryptoDataArray = () =>
	(
		<div className={s.dataArray}>
			<HardMarquee element={getRandomCryptoArrayTile()} delay={3300} intervalDelay={300} />
		</div>
	);

export default CryptoDataArray;
