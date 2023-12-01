'use client';

import s from './HardMarquee.module.scss';
import { useEffect, useRef, useState } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const HardMarquee = () => {
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	const [first, setFirst] = useState({
		child: generate(),
		transform: 'translateY(0%)'
	});
	const [second, setSecond] = useState({
		child: generate(),
		transform: 'translateY(0%)'
	});


	useEffect(() => {
		const part = 100/7;

		const interval = setInterval(() => {
			setFirst(x => {
				const currentTransform = Number(/\((.+)%/g.exec(x.transform)![1]);

				if (currentTransform >= 100){
					setSecond(() =>
						({ child: x.child, transform: 'translateY(0%)' }));
					return { child: generate(), transform: 'translateY(0%)' };
				}

				const transformValue = `translateY(${currentTransform + part}%)`;
				setSecond((s) =>
					({ ...s, transform: transformValue }));
				return { ...x, transform: transformValue };
			});
		}, 700);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<SxSC ref={firstRef} $sx={{
				// animationTimingFunction: 'steps(7)'
				transform: first.transform
			}} className={s.hardMarquee}>
				{first.child.map(({ backgroundColor, height }, i) => (
					<SxSC key={i} $sx={{ backgroundColor, height }}/>
				))}
			</SxSC>
			<SxSC ref={secondRef} $sx={{
				// animationTimingFunction: 'steps(7)'
				transform: second.transform
			}} className={s.hardMarquee}>
				{second.child.map(({ backgroundColor, height }, i) => (
					<SxSC key={i} $sx={{ backgroundColor, height }}/>
				))}
			</SxSC>
		</div>
	);
};

export default HardMarquee;

const generate = () => {
	const r = rand();
	return Array(7).fill(0).map(() => ({
		backgroundColor: colors[r], height: 10
	}));
};

const colors = [
	'#ff0000',
	'#00ff00',
	'#00ffff',
	'#ffff00',
	'#0000ff',
	'#ff00ff'
];

const rand = () => Math.floor(Math.random() * colors.length);

const round = (value: number, precision: number) => {
	const multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
};
