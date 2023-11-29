import s from './CryptoDataChecker.module.scss';
import CryptoDataCheckerLining from '@/app/components/molecules/CryptoDataCheckerLining/CryptoDataCheckerLining';
import DataMovingParts from '@/app/components/molecules/DataMovingParts/DataMovingParts';

const CryptoDataChecker = () => {
	return (
		<div className={s.data}>
			<DataMovingParts/>

			<div className={s.inner}>
				<CryptoDataCheckerLining/>


			</div>
		</div>
	);
};

export default CryptoDataChecker;
