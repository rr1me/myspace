'use client';

import s from './RedMovingCode.module.scss';
import useRandomCode from '@/app/components/organisms/RedMovingCode/useRandomCode';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import { useContext, useEffect } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import { useHydrated } from '@/app/components/shared/hooks';

const getCode = useRandomCode();
const codeArray = Array(6).fill(0).map(() => getCode());

const RedMovingCode = () => { //2300 width?
	const { setRedCodeQueue } = useContext(AnimationContext);
	useEffect(() => {
		setRedCodeQueue(codeArray.map(x=> x.i));
	}, []);
	const hydrated = useHydrated();

	return (
		<div className={s.movingCode}>
			{/*{Array(6).fill(0).map((_x, i) =>*/}
			{/*	<Marquee key={i} delay={2.5}>{getCode()}</Marquee>*/}
			{/*)}*/}
			{
				hydrated &&
				codeArray.map((x, i) =>
					<Marquee key={i} delay={2.5}>{x.code}</Marquee>
				)
			}
		</div>
	);
};

export default RedMovingCode;
