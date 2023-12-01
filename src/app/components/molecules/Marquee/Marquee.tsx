import s from './Marquee.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSProperties } from 'styled-components';

const Marquee = ({ children, horizontal, sx, duration = 30 }:
	{children: ReactNode, horizontal?: boolean, sx?: CSSProperties, duration?: number}) => {

	const classNameWrapper = clsx({
		[s.codeElement]: true,
		[s.codeElementVertical]: !horizontal,
		[s.codeElementHorizontal]: horizontal
	});

	const classNamePre = clsx({
		[s.anim]: true,
		[s.animVertical]: !horizontal,
		[s.animHorizontal]: horizontal
	});

	const Code =
		<SxSC as='pre' $sx={{
			animationDuration: duration/2 + 's',
			animationDelay: duration + 's'
		}} className={classNamePre}>
			<code>
				{children}
			</code>
		</SxSC>;

	return (
		<SxSC $sx={{
			animationDuration: duration + 's',
			...sx
		}} className={classNameWrapper}>
			{Code}
			{Code}
		</SxSC>
	);
};

export default Marquee;
