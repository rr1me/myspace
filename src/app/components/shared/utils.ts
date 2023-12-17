import { css, CSSObject, CSSProperties } from 'styled-components';
import { useEffect, useState } from 'react';

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

export const getRandomInt = (min: number, max: number) => {
	// min = Math.ceil(min);
	// max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
