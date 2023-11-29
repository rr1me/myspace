import s from './LineBreaker.module.scss';
import clsx from 'clsx';
import { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/utils';
import { CSSObject } from 'styled-components';
import SxStyledComponent from '@/app/components/atoms/SxStyledComponent/SxStyledComponent';

const LineBreaker = ({ sx, variant = LineBreakerVariant.end, mirrored, vertical }:
	{sx?: CSSObject,
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
		<SxStyledComponent $sx={sx} className={className}>
			{variant === LineBreakerVariant.startToEnd && <div className={s.end + ' ' + s.mirror}/>}

			<div className={s.breaker}/>
			<div className={s.end}/>
		</SxStyledComponent>
	);
};

export default LineBreaker;
