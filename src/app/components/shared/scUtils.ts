import { css, CSSObject, CSSProperties } from 'styled-components';

export const applyStyles = (styles: CSSProperties) => css`${styles as CSSObject}`;
