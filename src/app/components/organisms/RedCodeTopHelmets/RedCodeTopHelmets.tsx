'use client';

import s from './RedCodeTopHelmets.module.scss';
import Helmets from '@/app/components/molecules/Helmets/Helmets';
import { useAnimationStore } from '@/app/components/shared/syncStore';

const RedCodeTopHelmets = () => {
	const redCodeQueue = useAnimationStore(s => s.redCodeQueue);

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
