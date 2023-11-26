import s from './LineBreaker.module.scss';
import { CSSProperties } from 'react';

export enum LineBreakerVariant {
	end,
	startToEnd
}

const LineBreaker = ({ sx, variant = LineBreakerVariant.end }: {sx?: CSSProperties, variant?: LineBreakerVariant}) => {
	return (
		<div className={s.wrapper} style={sx}>
			{variant === LineBreakerVariant.startToEnd && <div className={s.end + ' ' + s.mirror}/>}

			<div className={s.breaker}/>
			<div className={s.end}/>
		</div>
	);
};

export default LineBreaker;
