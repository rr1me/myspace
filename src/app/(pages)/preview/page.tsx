import s from './page.module.scss';
import CryptoDataChecker from '@/app/components/blocks/CryptoDataChecker/CryptoDataChecker';

const page = () => {
	return (
		<main className={s.main}>
			<CryptoDataChecker/>
		</main>
	);
};

export default page;
