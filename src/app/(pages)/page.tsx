import s from './page.module.scss';
import Preloader from '@/app/components/templates/Preloader/Preloader';

const Page = () =>
	(
		<main className={s.page}>
			<Preloader />
		</main>
	);

export default Page;
