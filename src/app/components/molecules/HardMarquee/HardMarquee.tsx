'use client';

import s from './HardMarquee.module.scss';
import { ReactElement, useEffect, useRef, useState } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { delay } from '@/app/components/shared/utils';
import { renderToString } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { root } from 'postcss';

const HardMarquee = ({ getElement, delay: delayMs }: {getElement: () => ReactElement, delay?: number}) => {
	const [mount, setMount] = useState(true);

	const wrapperRef = useRef<HTMLDivElement>(null);
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	const element = getElement();

	// const [innerTransform, setInnerTransform] = useState(-200);
	// const [first, setFirst] = useState({
	// 	child: getElement(),
	// 	transform: 'translateY(0%)'
	// });
	// const [second, setSecond] = useState({
	// 	child: getElement(),
	// 	transform: 'translateY(0%)'
	// });

	useEffect(() => {
		const wrapperElem = wrapperRef.current;
		const firstElem = firstRef.current;
		const secondElem = secondRef.current;

		if (!wrapperElem || !firstElem || !secondElem) return;

		const length = firstElem.children.length;
		const part = 100 / length;
		const intervalDelay = 300;
		let initialized = false;

		let interval: NodeJS.Timeout;

		(async () => {
			if (delayMs !== undefined)
				await delay(delayMs);

			// setMount(true);

			interval = setInterval(() => {
				if (!initialized){
					// setInnerTransform(x => {
					// 	const sum = x + part;
					// 	if (sum >= -100){
					// 		initialized = true;
					// 		return -100;
					// 	}
					// 	return sum;
					// });
					const tr = wrapperElem.style.transform;
					const sum = (tr !== '' ? Number(/\((.+)%/g.exec(tr)![1]) : -200) + part;

					if (sum >= -100){
						initialized = true;
						wrapperElem.style.transform = 'translateY(-100%)';
						return;
					}
					wrapperElem.style.transform = `translateY(${sum}%)`;
					return;
				}

				requestIdleCallback(() => { //fixme seems to be its not cost effective and causes lags. try it on refs
					const tr = firstElem.style.transform;
					const currentTransform = tr !== '' ? Number(/\((.+)%/g.exec(tr)![1]) : 0;

					// const div = document.createElement('div');
					// const root = createRoot(div);
					// flushSync(() => {
					// 	root.render(getElement());
					// });

					if (currentTransform + part >= 100){
						firstElem.style.transform = 'translateY(0%)';
						secondElem.style.transform = 'translateY(0%)';

						// secondElem.innerHTML = firstElem.innerHTML;
						// firstElem.innerHTML = div.innerHTML;
						return;
					}
					const transformValue = `translateY(${currentTransform + part}%)`;
					firstElem.style.transform = transformValue;
					secondElem.style.transform = transformValue;


					// setFirst(x => {
					// 	// const currentTransform = Number(/\((\d+)%/g.exec(x.transform)![1]);
					//
					// 	if (currentTransform + part >= 100){
					// 		setSecond(() =>
					// 			({ child: x.child, transform: 'translateY(0%)' }));
					// 		return { child: getElement(), transform: 'translateY(0%)' };
					// 	}
					//
					// 	const transformValue = `translateY(${currentTransform + part}%)`;
					// 	setSecond((s) =>
					// 		({ ...s, transform: transformValue }));
					// 	return { ...x, transform: transformValue };
					// });
				});

			}, intervalDelay);
		})();

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={s.hardMarquee}>
			{mount &&
				<SxSC ref={wrapperRef} $sx={{
					transform: 'translateY(-200%)'
				}} className={s.inner}>
					<SxSC ref={firstRef} $sx={{
						transform: 'translateY(0%)'
					}} className={s.movingElement}>
						{element}
					</SxSC>
					<SxSC ref={secondRef} $sx={{
						transform: 'translateY(0%)'
					}} className={s.movingElement}>
						{element}
					</SxSC>
				</SxSC>
			}
		</div>
	);
};

export default HardMarquee;
