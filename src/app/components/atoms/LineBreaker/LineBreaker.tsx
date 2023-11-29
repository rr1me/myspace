import s from './LineBreaker.module.scss';
import clsx from 'clsx';
import { LineBreakerDiv } from './styled';
import { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/utils';
import { StyledDimensions } from '@/app/components/shared/utils';

const LineBreaker = ({ sx, variant = LineBreakerVariant.end, mirrored, vertical }:
	{sx?: Partial<Omit<StyledDimensions, '$height' | '$width'>>,
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
		<LineBreakerDiv {...sx} className={className}>
			{variant === LineBreakerVariant.startToEnd && <div className={s.end + ' ' + s.mirror}/>}

			<div className={s.breaker}/>
			<div className={s.end}/>
		</LineBreakerDiv>
	);
};

export default LineBreaker;
