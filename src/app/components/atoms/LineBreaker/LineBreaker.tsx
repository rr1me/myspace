import s from './LineBreaker.module.scss';
import clsx from 'clsx';
import { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/utils';
import { CSSObject } from 'styled-components';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { colorVars } from '@/app/theme';
import { HTMLAttributes } from 'react';

const LineBreaker = ({ sx, variant = LineBreakerVariant.end, mirrored,
	vertical, color = colorVars.c_addition_second, ...props }:
	{sx?: CSSObject, variant?: LineBreakerVariant, mirrored?: boolean,
		vertical?: boolean, color?: string} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>) => {
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
		<SxSC $sx={sx} className={className} {...props}>
			{variant === LineBreakerVariant.startToEnd && <div className={s.end + ' ' + s.mirror}/>}

			<SxSC $sx={{
				backgroundColor: color
			}} className={s.breaker}/>
			<SxSC $sx={{
				backgroundColor: color
			}} className={s.end}/>
		</SxSC>
	);
};

export default LineBreaker;
