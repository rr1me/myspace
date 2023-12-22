import { useEffect, useRef, useState } from 'react';

export const useHydrated = () => {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);
	return hydrated;
};

export const useIsFirstRender = () => {
	const ref = useRef(true);
	const isFirstRender = ref.current;
	ref.current = false;
	return isFirstRender;
};
