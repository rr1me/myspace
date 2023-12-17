'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import { endAlphabetDigitsSpared, getRandomInt, katakana, missingKatakana } from '@/app/components/shared/utils';
import Tab from '@/app/components/atoms/Tab/Tab';

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
			(
				<article className={s.data} key={i}>
					<span className={s.id}>
						<p>
							ADD1.{endAlphabetDigitsSpared[getRandomInt(0, endAlphabetDigitsSpared.length - 1)].toUpperCase()}
						</p>
						<span className={s.add1Symbol}>
							{missingKatakana[getRandomInt(0, missingKatakana.length - 1)]}
							<Tab sx={{ width: 6, height: 1, bottom: -2, left: -0.5, borderRadius: 5 }}/>
						</span>
					</span>
					<span className={s.katakana}>
						{Array(19).fill(0).map((_, i) => (
							<p key={i} className={s.katakanaSymbol}>
								{katakana[getRandomInt(0, katakana.length - 1)]}
							</p>
						))}
					</span>
					<span>
						dataBlocks
					</span>
				</article>
			))}
	</>
);


