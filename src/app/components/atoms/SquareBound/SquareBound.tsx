import s from './SquareBound.module.scss';
import { ReactNode } from 'react';

const SquareBound = ({ children }: {children?: ReactNode}) => {
	return (
		<div className={s.square}>
			<div className={s.bound}>
				{children}
			</div>
		</div>
	);
};

export default SquareBound;
