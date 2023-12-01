import { css, CSSObject, CSSProperties } from 'styled-components';

export const applyStyles = (styles: CSSProperties) => css`${styles as CSSObject}`;

export const delay = async (ms: number) =>
	new Promise(r => setTimeout(r, ms));
