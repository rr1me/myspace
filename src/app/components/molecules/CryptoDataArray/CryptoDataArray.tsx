'use client';

import s from './CryptoDataArray.module.scss';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';
import {
	endAlphabetDigitsSpared,
	getRandomArrayElement, getRandomInt,
	katakana,
	missingKatakana,
} from '@/app/components/shared/utils';
import Tab from '@/app/components/atoms/Tab/Tab';
import CryptoDataBlock, { CryptoDataBlockType } from '@/app/components/atoms/CryptoDataBlock/CryptoDataBlock';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { colorVars } from '@/app/theme';

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
			return (
				<article className={s.data} key={i}>
					<span className={s.id}>
						<p>
							ADD1.{getRandomArrayElement(endAlphabetDigitsSpared).toUpperCase()}
						</p>
						<span className={s.add1Symbol}>
							{getRandomArrayElement(missingKatakana)}
							<Tab sx={{ width: 6, height: 1, bottom: -2, left: -0.5, borderRadius: 5 }} />
						</span>
					</span>

					<span className={s.katakana}>
						{Array(19).fill(0).map((_, i) => (
							<p key={i} className={s.katakanaSymbol}>
								{getRandomArrayElement(katakana)}
							</p>
						))}
					</span>

					<span className={s.dataBlocks}>
						<CryptoDataBlock type={CryptoDataBlockType.Filled}>
							{getFilledDataBlock()}
						</CryptoDataBlock>
						<CryptoDataBlock type={CryptoDataBlockType.Unfilled}>
							{getUnfilledDataBlock()}
						</CryptoDataBlock>
						<CryptoDataBlock type={CryptoDataBlockType.Filled}>
							{getFilledDataBlock()}
						</CryptoDataBlock>
						<CryptoDataBlock type={CryptoDataBlockType.Unfilled}>
							{getUnfilledDataBlock()}
						</CryptoDataBlock>
					</span>
				</article>
			);
		})}
	</>
);

const filledDataBlocksStates = [
	{ str: 'SHATTERED', clr: colorVars.c_main_third },
	{ str: 'ALTERED', clr: colorVars.c_main_second_2 },
	{ str: 'CLEAN', clr: colorVars.c_addition_first },
];

const getFilledDataBlock = () => {
	const state = getRandomArrayElement(filledDataBlocksStates);

	return (
		<SxSC $sx={{
			color: state.clr
		}}>
			{state.str}
		</SxSC>
	);
};


//todo convert all static elements to default divs instead of SxSC.
// also, its possible to reuse DataPart component for 'X' blocks
const getUnfilledDataBlock = () => {
	const state = getRandomInt(0, 2);

	return state !== 2 ?
		<SxSC $sx={{
			color: colorVars.c_addition_second_80p,
			display: 'flex',
			justifyContent: 'center',
		}}>
			<SxSC $sx={{
				width: 40,
				display: 'flex',
				justifyContent: 'space-between'
			}}>
				X{getRandomInt(0, 9)}{getRandomInt(0, 9)}

				<SxSC $sx={{
					width: 26,
					height: 7,
					backgroundColor: colorVars.c_addition_second_80p,
					position: 'relative',
					top: 0.9
				}}/>
			</SxSC>
		</SxSC>
		:
		<SxSC $sx={{
			color: colorVars.c_main_third
		}}>
			{'>C'}
		</SxSC>;
};
