'use client';

import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import { mohave } from '@/app/theme';

const page = () => {
	return (
		<div className={mohave}>
			<CryptoDataChecker/>
		</div>
	);
};

export default page;
