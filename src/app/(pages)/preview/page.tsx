import s from './page.module.scss';
import BackgroundBottom from '@/app/components/organisms/BackgroundBottom/BackgroundBottom';

const page = () => {
	return (
		<main className={s.main}>
			<div style={{
				width: '1000px'
			}}>
				<BackgroundBottom/>
			</div>
		</main>
	);
};

export default page;
