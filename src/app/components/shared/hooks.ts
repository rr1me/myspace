import { useEffect, useRef, useState } from 'react';
import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';

// export const useHydrated = () => {
// 	const [hydrated, setHydrated] = useState(false);
// 	useEffect(() => {
// 		setHydrated(true);
// 	}, []);
// 	return hydrated;
// };
//
// export const useIsFirstRender = () => {
// 	const ref = useRef(true);
// 	const isFirstRender = ref.current;
// 	ref.current = false;
// 	return isFirstRender;
// };

export const useShowPageAnimation = (pageAnimationID: string): [boolean, () => void] => {
	const pageAnimation = useAnimationStore(s =>
		s.pageAnimation && !s.showedPages.includes(pageAnimationID));
	const onAnimationEnd = () => {
		animationStore.setStateSilently(s => ({ ...s,
			pageAnimation: false, showedPages: s.showedPages.concat(pageAnimationID) }));
	};
	return [pageAnimation, onAnimationEnd];
};
