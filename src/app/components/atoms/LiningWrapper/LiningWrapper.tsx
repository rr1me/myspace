import s from './LiningWrapper.module.scss';
import { ReactNode } from 'react';

/**
 * Should have wrapper with position: relative and height: 100%
 */
const LiningWrapper = ({ children }: {children: ReactNode}) => {
	return (
		<div className={s.lining}>
			{children}
		</div>
	);
};

export default LiningWrapper;
