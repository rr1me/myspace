import s from './CryptoDataChecker.module.scss';
import CryptoDataCheckerLining from '@/app/components/molecules/CryptoDataCheckerLining/CryptoDataCheckerLining';
import DataMovingParts from '@/app/components/molecules/DataMovingParts/DataMovingParts';
import HardMarquee from '@/app/components/molecules/HardMarquee/HardMarquee';

const CryptoDataChecker = () => {
	return (
		<div className={s.data}>
			<DataMovingParts/>

			<div className={s.inner}>
				<CryptoDataCheckerLining/>

				<HardMarquee/>
			</div>
		</div>
	);
};

export default CryptoDataChecker;
