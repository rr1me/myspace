import s from './page.module.scss';
import Lamp from '@/app/components/atoms/Lamp/Lamp';
import LoadingLog from '@/app/components/molecules/LoadingLog/LoadingLog';
import CLIShell from '@/app/components/molecules/CLIShell/CLIShell';

const page = () => {
	return (
		<main className={s.main}>
			{/*<Lamp color={'rgba(154, 40, 73, 0.3)'} sx={{*/}
			{/*	height: 500,*/}
			{/*	width: 500*/}
			{/*}}/>*/}
			{/*<LoadingLog/>*/}
			<div style={{
				height: 200
			}}>
				<CLIShell/>
			</div>
		</main>
	);
};

export default page;
