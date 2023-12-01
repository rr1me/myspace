'use client';

import s from './HardMarquee.module.scss';
import { useEffect, useRef, useState } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { delay } from '@/app/components/shared/utils';

const HardMarquee = () => {
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	const [innerTransform, setInnerTransform] = useState(-200);
	const [first, setFirst] = useState({
		child: getRandomElement(),
		transform: 'translateY(0%)'
	});
	const [second, setSecond] = useState({
		child: getRandomElement(),
		transform: 'translateY(0%)'
	});

	useEffect(() => {
		(async () => {
			const length = first.child.props.children.length;
			const part = 100/ length;
			const intervalDelay = 300;

			// for (let i = 0; i < length; i++) {
			// 	setInnerTransform(x => x + part >= -100 ? -100 : x + part);
			// 	if (i + 1 !== length)
			// 		await delay(intervalDelay);
			// }
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
					const currentTransform = Number(/\((.+)%/g.exec(x.transform)![1]);

					if (currentTransform + part >= 100){
						setSecond(() =>
							({ child: x.child, transform: 'translateY(0%)' }));
						return { child: getRandomElement(), transform: 'translateY(0%)' };
					}

					const transformValue = `translateY(${currentTransform + part}%)`;
					setSecond((s) =>
						({ ...s, transform: transformValue }));
					return { ...x, transform: transformValue };
				});
			}, intervalDelay);

			return () => {
				clearInterval(interval);
			};
		})();
	}, []);

	return (
		<div className={s.hardMarquee}>
			<SxSC $sx={{
				transform: `translateY(${innerTransform}%)`
			}}  className={s.inner}>
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
		</div>
	);
};

export default HardMarquee;

const getRandomElement = () => (
	<>
		{Array(10).fill(0).map((_x, i) =>
			(<SxSC $sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }} key={i}>
				<SxSC $sx={{ height: 11 }}>
					{Math.random().toFixed(5)}
				</SxSC>
			</SxSC>))}
	</>
);
