'use client';

import s from './HardMarquee.module.scss';
import { useEffect, useRef, useState } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const HardMarquee = () => {
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	const [first, setFirst] = useState({
		child: getRandomElement(),
		transform: 'translateY(0%)'
	});
	const [second, setSecond] = useState({
		child: getRandomElement(),
		transform: 'translateY(0%)'
	});

	useEffect(() => {

		const part = 100/first.child.props.children.length;

		const interval = setInterval(() => {
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
		}, 700);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={s.wrapper}>
			<div className={s.hardMarquee}>
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
			</div>
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
