import { css, CSSObject, CSSProperties } from 'styled-components';

export const applyStyles = (styles: CSSProperties) => css`${styles as CSSObject}`;

// export const applyStyles = (styles: CSSObject) => css`
//   ${({ theme }: { theme: any }) => {
// 	const appliedStyles: CSSObject = {};
//
// 	Object.keys(styles).forEach((key: string) => {
// 		if (typeof styles[key] === 'function') {
// 			appliedStyles[key] = (styles[key] as any)(theme);
// 		} else {
// 			appliedStyles[key] = styles[key];
// 		}
// 	});
//
// 	return appliedStyles;
// }}
// `;
