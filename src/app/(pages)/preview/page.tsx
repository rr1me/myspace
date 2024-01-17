'use client';

import CryptoDataChecker from '@/app/components/organisms/CryptoDataChecker/CryptoDataChecker';
import { mohave } from '@/app/theme';
import Who from '@/app/components/molecules/Who/Who';
import { createClassName } from '@/app/components/shared/utils';
import s from './page.module.scss';

const page = () => {
	return (
		<div className={createClassName(mohave, s.prev)}>
			{/*<CryptoDataChecker/>*/}
			<Who/>
		</div>
	);
};

export default page;
