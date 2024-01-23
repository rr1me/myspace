'use client';

import { mohave } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import s from './page.module.scss';

const page = () => {
	return (
		<div className={createClassName(mohave, s.prev)}>
			{/*<CryptoDataChecker/>*/}
			{/*<Who/>*/}
		</div>
	);
};

export default page;
