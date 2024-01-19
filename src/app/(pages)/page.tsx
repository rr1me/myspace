'use client';

import s from './page.module.scss';
import Who from '@/app/components/molecules/Who/Who';
import WhoInteraction from '@/app/components/molecules/WhoInteraction/WhoInteraction';
import { useShowPageAnimation } from '@/app/components/shared/hooks';

const Page = () => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('who');
	return (
		<article className={s.intro}>
			<Who pageAnimation={pageAnimation}/>
			<WhoInteraction pageAnimation={pageAnimation} onAnimationEnd={onAnimationEnd}/>
		</article>
	);
};

export default Page;
