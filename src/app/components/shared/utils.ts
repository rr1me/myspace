import { css, CSSObject, CSSProperties } from 'styled-components';
import { useEffect, useState } from 'react';
import { colorVars } from '@/app/theme';

export const applyStyles = (styles: CSSProperties) => css`${styles as CSSObject}`;

export const useHydrated = () => {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);
	return hydrated;
};

export const engAlphabet = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

export const digits = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

export const endAlphabetDigitsSpared = engAlphabet.concat(digits);

export const katakana = [
	'ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ',
	'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ', 'ﾑ', 'ﾕ', 'ﾗ', 'ｾ', 'ﾈ', 'ｽ', 'ﾀ', 'ﾇ', 'ﾍ',
];

export const missingKatakana = [
	'ｦ', 'ｲ', 'ｸ', 'ｺ', 'ｿ', 'ﾁ', 'ﾄ',
	'ﾉ', 'ﾌ', 'ﾔ', 'ﾖ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾝ',
];

export const dataBlocksStates = [
	{ str: 'SHATTERED', clr: colorVars.c_main_third },
	{ str: 'ALTERED', clr: colorVars.c_main_second_2 },
	{ str: 'CLEAN', clr: colorVars.c_addition_first },
];

export const getRandomArrayIndex = (length: number) =>
	getRandomInt(0, length - 1);

export const getRandomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
