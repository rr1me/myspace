import s from './page.module.scss';
import BlueCross from '@/app/components/atoms/BlueCross/BlueCross';

const page = () => {
	return (
		<main className={s.main}>
			{/*preview*/}
			<BlueCross/>
		</main>
	);
};

export default page;
