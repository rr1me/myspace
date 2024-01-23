import s from './CryptoDataChecker.module.scss';
import CryptoDataCheckerLining from '@/app/components/molecules/CryptoDataCheckerLining/CryptoDataCheckerLining';
import DataMovingParts from '@/app/components/molecules/DataMovingParts/DataMovingParts';
import CryptoDataArray from '@/app/components/molecules/CryptoDataArray/CryptoDataArray';

const CryptoDataChecker = ({ isMobile }: {isMobile: boolean}) =>
	(
		<div className={s.data}>
			<DataMovingParts />
			<div className={s.inner}>
				<CryptoDataCheckerLining />
				<CryptoDataArray isMobile={isMobile}/>
			</div>
		</div>
	);

export default CryptoDataChecker;
