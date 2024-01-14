'use client';

import s from './PngLamp.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSObject } from 'styled-components';

import redGrad from './red.png';
import redGradFalloff from './redMoreFalloff.png';
import cyanGrad from './cyan.png';
import { useEffect, useRef } from 'react';

const PngLamp = ({ cyan = false, moreFalloff = false, sx, delay = 0, duration = 1000, start = true }:
	{cyan?: boolean, moreFalloff?: boolean, sx?: CSSObject, delay?: number, duration?: number, start?: boolean}) => {
	const elemRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const ref = elemRef.current;
		if (!ref) return;
		ref.style.animationDelay = delay + 'ms';
		ref.style.animationDuration = duration + 'ms';
	}, []);

	useEffect(() => {
		const ref = elemRef.current;
		if (!start || !ref) return;
		ref.style.animationPlayState = 'running';
		ref.style.animationFillMode = 'forwards';
	}, [start]);

	return (
		<SxSC $sx={sx} className={s.lamp}>
			<img ref={elemRef} src={(cyan ?
				moreFalloff ? cyanGrad : cyanGrad
				:
				moreFalloff ? redGradFalloff : redGrad
			).src} className={s.animated}/>
		</SxSC>
	);
};

export default PngLamp;
