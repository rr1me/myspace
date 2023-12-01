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
