'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import { endAlphabetDigitsSpared, getRandomInt, katakana } from '@/app/components/shared/utils';

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
					<p className={s.id}>
					ADD1.{endAlphabetDigitsSpared[getRandomInt(0, endAlphabetDigitsSpared.length - 1)].toUpperCase()}
					</p>
					<div className={s.katakana}>
						{Array(19).fill(0).map((_, i) => (
							<p key={i} className={s.katakanaSymbol}>
								{katakana[getRandomInt(0, katakana.length - 1)]}
							</p>
						))}
					</div>
					<div>
						ebanoe gamno
					</div>
				</article>
			))}
	</>
);


