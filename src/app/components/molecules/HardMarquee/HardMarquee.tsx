'use client';

import s from './HardMarquee.module.scss';
import { ReactElement, useEffect, useRef } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { delay } from '@/app/components/shared/utils';

const HardMarquee = ({ element, delay: delayMs, intervalDelay = 300 }:
	{element: ReactElement, delay?: number, intervalDelay?: number}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const wrapperElem = wrapperRef.current;
		const firstElem = firstRef.current;
		const secondElem = secondRef.current;

		if (!wrapperElem || !firstElem || !secondElem) return;

		const length = firstElem.children.length;
		const part = 100 / length;

		let interval: NodeJS.Timeout;
		let innerInterval: NodeJS.Timeout;

		(async () => {
			if (delayMs !== undefined)
				await delay(delayMs);

			interval = setInterval(() => {
				const tr = wrapperElem.style.transform;
				const sum = (tr !== '' ? Number(/\((.+)%/g.exec(tr)![1]) : -200) + part;

				if (sum >= -100){
					wrapperElem.style.transform = 'translateY(-100%)';

					clearInterval(interval);
					innerInterval = setInterval(() => {
						requestIdleCallback(() => {
							const tr = firstElem.style.transform;
							const currentTransform = tr !== '' ? Number(/\((.+)%/g.exec(tr)![1]) : 0;

							if (currentTransform + part >= 100){
								firstElem.style.transform = 'translateY(0%)';
								secondElem.style.transform = 'translateY(0%)';
								return;
							}
							const transformValue = `translateY(${currentTransform + part}%)`;
							firstElem.style.transform = transformValue;
							secondElem.style.transform = transformValue;
						});
					}, intervalDelay);
					return;
				}

				wrapperElem.style.transform = `translateY(${sum}%)`;
				return;
			}, intervalDelay);
		})();

		return () => {
			clearInterval(interval);
			clearInterval(innerInterval);
		};
	}, []);

	return (
		<div className={s.hardMarquee}>
			<SxSC ref={wrapperRef} $sx={{
				transform: 'translateY(-210%)'
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
		</div>
	);
};

export default HardMarquee;
