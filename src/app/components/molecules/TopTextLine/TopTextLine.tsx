import s from './TopTextLine.module.scss';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import {
	endAlphabetDigitsSpared,
	getRandomArrayElement,
	katakana,
	missingKatakana,
} from '@/app/components/shared/utils';

const allSpecials = katakana.concat(missingKatakana).concat(endAlphabetDigitsSpared);
const randStr = Array(450).fill(0).map(() => getRandomArrayElement(allSpecials)).join('').toUpperCase();

const TopTextLine = () =>
	(
		<>
			<ExtendingLine />
			<div className={s.topTextLine}>
				<Marquee horizontal>
					<p className={s.text}>{randStr}</p>
				</Marquee>
			</div>
			<ExtendingLine variant={ExtendingLineVariant.backward} />
		</>
	);

export default TopTextLine;
