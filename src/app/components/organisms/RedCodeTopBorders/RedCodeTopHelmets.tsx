'use client';

import s from './RedCodeTopHelmets.module.scss';
import { useContext } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import Helmets from '@/app/components/molecules/Helmets/Helmets';

//137.39 434.16 527.58 384.7 450.66 615.52 gap30

const RedCodeTopHelmets = () => {
	const { redCodeQueue } = useContext(AnimationContext);

	const bordersWidth = [
		384,
		615,
		527,
		137,
		434,
		450,
	];

	return (
		<section className={s.borders}>
			{redCodeQueue.map(x =>
				<Helmets width={bordersWidth[x]} key={x}/>
			)}
		</section>
	);
};

export default RedCodeTopHelmets;
