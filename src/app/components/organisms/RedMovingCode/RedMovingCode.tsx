'use client';

import s from './RedMovingCode.module.scss';
import useRandomCode from '@/app/components/organisms/RedMovingCode/useRandomCode';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import { useEffect } from 'react';
import { useHydrated } from '@/app/components/shared/hooks';
import { animationStore } from '@/app/components/shared/syncStore';

const getCode = useRandomCode();
const codeArray = Array(6).fill(0).map(() => getCode());

const RedMovingCode = () => { //2300 width?
	useEffect(() => {
		animationStore.setState(s => ({ ...s, redCodeQueue: codeArray.map(x=> x.i) }));
	}, []);
	const hydrated = useHydrated();

	return (
		<div className={s.movingCode}>
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
