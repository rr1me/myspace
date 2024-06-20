import { animationStore, useAnimationStore } from '@/app/components/shared/syncStore';
import { CSSProperties } from 'styled-components';
import { SpringConfig } from '@react-spring/core';
import { Spring } from '@/app/components/molecules/ExperienceBlock/ExperienceBlock';
import { SpringRef, useChain, useSpring, useSpringRef } from '@react-spring/web';

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

// export const useSpringWithRef = (
// 	from: Style,
// 	to: Style,
// 	cfg?: SpringConfig,
// 	offline: boolean = false,
// 	onRest?: () => void)
// 	:
// 	[Springs | undefined, SpringRef | undefined] => {
// 	const ref = useSpringRef();
//
// 	return offline ? [undefined, undefined] : [
// 		useSpring({
// 			ref,
// 			from,
// 			to,
// 			config: cfg,
// 			onRest
// 		}), ref
// 	];
// };

type Style = CSSProperties | object;
export const useChainedSprings = (springs:
	{
		options: [from: Style, to: Style, cfg?: SpringConfig, onRest?: () => void],
		timing: number
	}[], online: boolean = true) => {

	const springArray: Spring[] = [];
	const refArray: SpringRef[] = [];

	for (const { options } of springs) {
		const [from, to, cfg, onRest] = options;
		const ref = useSpringRef();
		const spring = useSpring({
			ref,
			from,
			to,
			config: cfg,
			onRest
		});
		springArray.push(spring);
		refArray.push(ref);
	}

	useChain(refArray, springs.map(x => x.timing));
	return online ? springArray : springs.map(() => undefined);
};
