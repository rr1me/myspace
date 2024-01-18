'use client';

import s from './RedMovingCode.module.scss';
import useRandomCode from '@/app/components/organisms/RedMovingCode/useRandomCode';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import { useEffect } from 'react';
import { animationStore } from '@/app/components/shared/syncStore';

const getCode = useRandomCode();
const codeArray = Array(6).fill(0).map(() => getCode());

const RedMovingCode = () => { //2300 width?
	useEffect(() => {
		// animationStore.setState(s => ({ ...s, redCodeQueue: codeArray.map(x=> x.i) }));
	}, []);
	console.log('render rmc');

	return (
		<section className={s.movingCode}>
			{
				codeArray.map((x, i) =>
					<Marquee key={i} delay={2.5}>{x.code}</Marquee>
				)
			}
		</section>
	);
};

export default RedMovingCode;
