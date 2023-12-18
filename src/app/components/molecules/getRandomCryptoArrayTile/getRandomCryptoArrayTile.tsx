import s from './RandomDataArrayTile.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { colorVars } from '@/app/theme';
import {
	endAlphabetDigitsSpared,
	getRandomArrayElement,
	getRandomInt, katakana,
	missingKatakana,
} from '@/app/components/shared/utils';
import CryptoDataBlock, { CryptoDataBlockType } from '@/app/components/atoms/CryptoDataBlock/CryptoDataBlock';
import Tab from '@/app/components/atoms/Tab/Tab';
import DataTabToChange from '@/app/components/atoms/DataTab/DataTab';
import restyle from '@/app/components/shared/restyle';

// can't just use usual FC because it needs component to be copied in hardMarquee with it's randomized values. or can I?
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

export default getRandomElement;

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

const DataTab = restyle(DataTabToChange, {
	borderRadius: 'unset'
});


//todo convert all static elements to default divs instead of SxSC.
// also, its possible to reuse DataPart component for 'X' blocks
const getUnfilledDataBlock = () => {
	const state = getRandomInt(0, 2);

	return state !== 2 ?
		<div className={s.unfilled}>
			<div className={s.inner}>
				X{getRandomInt(0, 9)}{getRandomInt(0, 9)}

				<div className={s.previewWrapper}>
					{state === 0 ?
						<div className={s.preview}/>
						:
						<div className={s.unlitPreview}>
							<DataTab sx={{ width: 10 }}/>
							<DataTab sx={{ width: 3 }}/>
							<DataTab sx={{ width: 1 }}/>
							<DataTab sx={{ width: 1 }}/>
							<DataTab sx={{ width: 1 }}/>
							<DataTab sx={{
								width: 6,
								backgroundColor: 'unset',
								border: `0.5px solid ${colorVars.c_addition_second_80p}`
							}}/>
						</div>
					}
				</div>
			</div>
		</div>
		:
		<div className={s.corrupted}>
			{'>C'}
		</div>;
};
