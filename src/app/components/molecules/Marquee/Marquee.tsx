'use client';

import s from './Marquee.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSProperties } from 'styled-components';

/**
 * You should use text with height >= marquee container, because it's unable to force minHeight due to background distortion
 */
const Marquee = ({ children, horizontal = false, sx, duration = 30,
	whitespacePreWrap = false, reverse = false, once = false }:
	{children: ReactNode, horizontal?: boolean, sx?: CSSProperties,
		duration?: number, whitespacePreWrap?: boolean, reverse?: boolean, once?: boolean}) => {

	if (reverse && horizontal)
		throw new Error('Not implemented yet due to non-use');

	const classNameDuoPreWrapper = clsx({
		[s.duoPreWrapper]: true,
		[s[`duoPreWrapper${horizontal ? 'Horizontal' : 'Vertical'}${reverse ? 'Reverse' : ''}`]]: true
	});

	const classNamePre = clsx({
		[s.pre]: true,
		[s[`pre${horizontal ? 'Horizontal' : 'Vertical'}${reverse ? 'Reverse' : ''}`]]: true
	});

	const classNameCode = clsx({
		[s.codeWrap]: whitespacePreWrap
	});

	const pre =
		<SxSC as='pre' $sx={once ?
			{
				animationDuration: duration + 's',
			}
			:
			{
				animationDuration: duration/2 + 's',
				animationDelay: duration + 's',
				animationIterationCount: 'infinite'
			}
		} className={classNamePre}>
			<code className={classNameCode}>
				{children}
			</code>
		</SxSC>;

	const duoPreWrapper = once ? pre :
		<SxSC $sx={{
			animationDuration: duration + 's',
			...sx
		}} className={classNameDuoPreWrapper}>
			{pre}
			{pre}
		</SxSC>;

	return (
		<div className={s.marqueeWrapper}>
			{reverse ?
				<div className={s.reverseWrapper}>
					{duoPreWrapper}
				</div>
				:
				duoPreWrapper
			}
		</div>
	);
};

export default Marquee;

