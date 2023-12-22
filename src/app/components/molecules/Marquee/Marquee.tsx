'use client';

import s from './Marquee.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSProperties } from 'styled-components';

/**
 * You should use text with height >= marquee container, because it's unable to force minHeight due to background distortion
 */
const Marquee = ({ children, horizontal, sx, duration = 30, preWrap = false, reverse = false }:
	{children: ReactNode, horizontal?: boolean, sx?: CSSProperties,
		duration?: number, preWrap?: boolean, reverse?: boolean}) => {

	const classNameWrapper = clsx({
		[s.codeElement]: true,
		[s.codeElementVertical]: !horizontal,
		[s.codeElementHorizontal]: horizontal,
	});

	const classNamePre = clsx({
		[s.anim]: true,
		[s.animVertical]: !horizontal,
		[s.animHorizontal]: horizontal
	});

	const classNameCode = clsx({
		[s.preWrap]: preWrap
	});

	const pre =
		<SxSC as='pre' $sx={{
			animationDuration: duration/2 + 's',
			animationDelay: duration + 's'
		}} className={classNamePre}>
			<code className={classNameCode}>
				{children}
			</code>
		</SxSC>;

	return (
		<div className={s.marqueeWrapper}>
			<SxSC $sx={{
				animationDuration: duration + 's',
				...sx
			}} className={classNameWrapper}>
				{pre}
				{pre}
			</SxSC>
		</div>
	);
};

export default Marquee;

