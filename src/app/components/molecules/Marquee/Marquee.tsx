'use client';

import s from './Marquee.module.scss';
import { ReactNode, useEffect } from 'react';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSProperties } from 'styled-components';

/**
 * You should use text with height >= marquee container, because it's unable to force minHeight due to background distortion
 */
const Marquee = ({ children, horizontal = false, sx, duration = 30,
	whitespacePreWrap = false, reverse = false, once = false, onAnimationEnd, noOverflow = false }:
	{children: ReactNode, horizontal?: boolean, sx?: CSSProperties,
		duration?: number, whitespacePreWrap?: boolean, reverse?: boolean, once?: boolean,
		onAnimationEnd?: () => void, noOverflow?: boolean}) => {
	if (reverse && horizontal)
		throw new Error('Not implemented yet due to non-use');

	const classNamesContinuation =
		`${reverse ? 'VerticalReverse' : horizontal ? 'Horizontal' : 'Vertical'}`;
	const classNameDuoPreWrapper = clsx({
		[s.duoPreWrapper]: true,
		[s['duoPreWrapper' + classNamesContinuation]]: true
	});
	const classNamePre = clsx({
		[s.pre]: true,
		[s['pre' + classNamesContinuation]]: true
	});
	const classNameCode = clsx({
		[s.codeWrap]: whitespacePreWrap
	});
	const classNameMarquee = clsx({
		[s.marqueeWrapper]: true,
		[s.overflow]: !noOverflow
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

	useEffect(() => {
		if (onAnimationEnd === undefined) return;
		const endCallbackTimeout = setTimeout(onAnimationEnd, duration * 1000);
		return () => {
			clearTimeout(endCallbackTimeout);
		};
	}, []);

	return (
		<div className={classNameMarquee}>
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

