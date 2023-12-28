'use client';

import s from './RedCodeTopHelmets.module.scss';
import { useContext } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import Helmets from '@/app/components/molecules/Helmets/Helmets';

const RedCodeTopHelmets = () => {
	const { redCodeQueue } = useContext(AnimationContext);

	const bordersWidth = [384, 615, 527, 137, 434, 450];

	return (
		<section className={s.borders}>
			{redCodeQueue.map(x =>
				<Helmets width={bordersWidth[x]} key={x}/>
			)}
		</section>
	);
};

export default RedCodeTopHelmets;
