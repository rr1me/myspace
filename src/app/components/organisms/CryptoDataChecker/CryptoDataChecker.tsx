import s from './CryptoDataChecker.module.scss';
import CryptoDataCheckerLining from '@/app/components/molecules/CryptoDataCheckerLining/CryptoDataCheckerLining';
import DataMovingParts from '@/app/components/molecules/DataMovingParts/DataMovingParts';
import CryptoDataArray from '@/app/components/molecules/CryptoDataArray/CryptoDataArray';

const CryptoDataChecker = () =>
	(
		<div className={s.data}>
			<DataMovingParts />
			<div className={s.inner}>
				<CryptoDataCheckerLining />
				<CryptoDataArray />
			</div>
		</div>
	);

export default CryptoDataChecker;
