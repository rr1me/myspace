import s from './page.module.scss';
import Who from '@/app/components/molecules/Who/Who';
import WhoInteraction from '@/app/components/molecules/WhoInteraction/WhoInteraction';

const Page = () =>
	(
		<article className={s.intro}>
			<Who/>
			<WhoInteraction/>
		</article>
	);

export default Page;
