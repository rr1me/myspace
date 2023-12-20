import s from './CircleSymbolPair.module.scss';
import { ReactNode } from 'react';
import SvgCircle from '@/app/components/atoms/SvgCircle/SvgCircle';
import clsx from 'clsx';

const CircleSymbolPair = ({ children, red = false }: {children: ReactNode, red?: boolean}) =>
	<div className={s.circleSymbolPair}>
		<SvgCircle/>
		<p className={clsx({
			[s.circleSymbol]: true,
			...(
				red ?
					{
						[s.red]: true
					}
					:
					{
						[s.cyan]: true
					}
			)
		})}>{children}</p>
	</div>;

export default CircleSymbolPair;
