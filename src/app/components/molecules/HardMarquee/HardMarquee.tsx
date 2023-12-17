'use client';

import s from './HardMarquee.module.scss';
import { ReactElement, useEffect, useRef, useState } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { useHydrated } from '@/app/components/shared/utils';

const HardMarquee = ({ getElement }: {getElement: () => ReactElement}) => {
	const hydrated = useHydrated();

	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	const secondOffset = 0

	const [innerTransform, setInnerTransform] = useState(-200);
	const [first, setFirst] = useState({
		child: getElement(),
		transform: 'translateY(0%)'
	});
	const [second, setSecond] = useState({
		child: getElement(),
		transform: `translateY(calc(0% - ${secondOffset}px))`
	});

	// console.log(/\((\d+)%/g.exec('translateY(calc(50% - 5px));'));

	useEffect(() => {
		const length = first.child.props.children.length;
		const part = 100/ length;
		const intervalDelay = 300;
		let initialized = false;

		const interval = setInterval(() => {
			if (!initialized){
				setInnerTransform(x => {
					const sum = x + part;
					if (sum >= -100){
						initialized = true;
						return -100;
					}
					return sum;
				});
				return;
			}

			setFirst(x => {
				// const currentTransform = Number(/\((.+)%/g.exec(x.transform)![1]);
				const currentTransform = Number(/\((\d+)%/g.exec(x.transform)![1]);

				if (currentTransform + part >= 100){
					setSecond(() =>
						({ child: x.child, transform: 'translateY(0%)' }));
					return { child: getElement(), transform: 'translateY(0%)' };
				}

				const transformValue = `translateY(calc(${currentTransform + part}% - 0px))`;
				setSecond((s) =>
					({ ...s, transform: `translateY(calc(${currentTransform + part}% - ${secondOffset}px))` }));
				return { ...x, transform: transformValue };
			});
		}, intervalDelay);

		// setTimeout(() => clearInterval(interval), 4000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={s.hardMarquee}>
			{hydrated &&
				<SxSC $sx={{
					transform: `translateY(${innerTransform}%)`
				}} className={s.inner}>
					<SxSC ref={firstRef} $sx={{
						transform: first.transform
					}} className={s.movingElement}>
						{first.child}
					</SxSC>
					<SxSC ref={secondRef} $sx={{
						transform: second.transform
					}} className={s.movingElement}>
						{second.child}
					</SxSC>
				</SxSC>
			}
		</div>
	);
};

export default HardMarquee;