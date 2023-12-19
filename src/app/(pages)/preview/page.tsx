import s from './page.module.scss';
import CLI from '@/app/components/organisms/CLI/CLI';

const page = () => {
	return (
		<main className={s.main}>
			<CLI/>
		</main>
	);
};

export default page;
