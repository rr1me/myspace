import s from './LineBreaker.module.scss';
import clsx from 'clsx';
import { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/utils';
import { CSSProperties } from 'styled-components';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const LineBreaker = ({ sx, variant = LineBreakerVariant.end, mirrored, vertical }:
	{sx?: CSSProperties,
		variant?: LineBreakerVariant, mirrored?: boolean, vertical?: boolean}) => {
	const className = clsx({
		[s.wrapper]: true,
		...(mirrored && vertical ?
			{
				[s.doubled]: true
			}
			:
			{
				[s.mirrorWrapper]: mirrored,
				[s.vertical]: vertical
			}
		)
	});

	return (
		<SxSC $sx={sx} className={className}>
			{variant === LineBreakerVariant.startToEnd && <div className={s.end + ' ' + s.mirror}/>}

			<div className={s.breaker}/>
			<div className={s.end}/>
		</SxSC>
	);
};

export default LineBreaker;
