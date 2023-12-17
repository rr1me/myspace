'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import {
	dataBlocksStates,
	endAlphabetDigitsSpared,
	getRandomArrayIndex,
	katakana,
	missingKatakana,
} from '@/app/components/shared/utils';
import Tab from '@/app/components/atoms/Tab/Tab';
import CryptoDataFilledBlock from '@/app/components/atoms/CryptoDataFilledBlock/CryptoDataFilledBlock';

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
		{Array(10).fill(0).map((_x, i) => {
			const firstIndexOfFilledBlock = getRandomArrayIndex(dataBlocksStates.length);
			const secondIndexOfFilledBlock = getRandomArrayIndex(dataBlocksStates.length);

			return (
				<article className={s.data} key={i}>
					<span className={s.id}>
						<p>
							ADD1.{endAlphabetDigitsSpared[getRandomArrayIndex(endAlphabetDigitsSpared.length)].toUpperCase()}
						</p>
						<span className={s.add1Symbol}>
							{missingKatakana[getRandomArrayIndex(missingKatakana.length)]}
							<Tab sx={{ width: 6, height: 1, bottom: -2, left: -0.5, borderRadius: 5 }} />
						</span>
					</span>
					<span className={s.katakana}>
						{Array(19).fill(0).map((_, i) => (
							<p key={i} className={s.katakanaSymbol}>
								{katakana[getRandomArrayIndex(katakana.length)]}
							</p>
						))}
					</span>
					<span className={s.dataBlocks}>
						<CryptoDataFilledBlock index={firstIndexOfFilledBlock}/>
						<CryptoDataFilledBlock index={secondIndexOfFilledBlock}/>
					</span>
				</article>
			);
		})}
	</>
);

