'use client';

import s from './RedMovingCode.module.scss';
import useRandomCode from '@/app/components/organisms/RedMovingCode/useRandomCode';
import Marquee from '@/app/components/molecules/Marquee/Marquee';

const RedMovingCode = () => { //2300 width?
	const getCode = useRandomCode();

	return (
		<div className={s.movingCode}>
			{Array(6).fill(0).map((_x, i) =>
				<Marquee key={i}>{getCode()}</Marquee>
			)}
		</div>
	);
};

export default RedMovingCode;
