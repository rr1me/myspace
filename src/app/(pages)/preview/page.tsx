import s from './page.module.scss';
import BackgroundBottom from '@/app/components/organisms/BackgroundBottom/BackgroundBottom';
import Status from '@/app/components/organisms/Status/Status';

const page = () => {
	return (
		<main className={s.main}>
			<div style={{
				width: '1000px'
			}}>
				<Status/>
			</div>
		</main>
	);
};

export default page;
