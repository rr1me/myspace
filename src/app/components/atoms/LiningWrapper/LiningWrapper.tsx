import s from './LiningWrapper.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Should have wrapper with position: relative and height: 100%
 */
const LiningWrapper = ({ children, noIndex }: {children: ReactNode, noIndex?: boolean}) => {
	return (
		<div className={clsx({
			[s.lining]: true,
			[s.index]: !noIndex
		})}>
			{children}
		</div>
	);
};

export default LiningWrapper;
