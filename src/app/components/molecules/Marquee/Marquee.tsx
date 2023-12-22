'use client';

import s from './Marquee.module.scss';
import { forwardRef, ReactNode, useEffect, useRef } from 'react';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSProperties } from 'styled-components';

const Marquee = ({ children, horizontal, sx, duration = 30 }:
	{children: ReactNode, horizontal?: boolean, sx?: CSSProperties, duration?: number}) => {

	const wrapperRef = useRef<HTMLDivElement>(null);
	const firstPreRef = useRef<HTMLPreElement>(null);
	const secondPreRef = useRef<HTMLPreElement>(null);

	useEffect(() => {
		const
			wrapper = wrapperRef.current,
			firstPre = firstPreRef.current,
			secondPre = secondPreRef.current;
		if (!wrapper || !firstPre || !secondPre) return;

		const preHeight = firstPre.getBoundingClientRect().height;
		const wrapperHeight = wrapper.getBoundingClientRect().height;

		if (preHeight >= wrapperHeight) return;
		const height = wrapperHeight + 'px';
		firstPre.style.height = height;
		secondPre.style.height = height;

	}, []);

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

	// const Pre =
	// 	<SxSC as='pre' $sx={{
	// 		animationDuration: duration/2 + 's',
	// 		animationDelay: duration + 's'
	// 	}} className={classNamePre}>
	// 		<code>
	// 			{children}
	// 		</code>
	// 	</SxSC>;

	return (
		<div className={s.marqueeWrapper} ref={wrapperRef}>
			<SxSC $sx={{
				animationDuration: duration + 's',
				...sx
			}} className={classNameWrapper}>
				{/*{Pre}*/}
				{/*{Pre}*/}
				<Pre ref={firstPreRef} className={classNamePre} duration={duration}>
					{children}
				</Pre>
				<Pre ref={secondPreRef} className={classNamePre} duration={duration}>
					{children}
				</Pre>
			</SxSC>
		</div>
	);
};

export default Marquee;

// const Pre = ({ children, className, duration }:
// 	{children: ReactNode, className: string, duration: number}) => (
// 	<SxSC as='pre' $sx={{
// 		animationDuration: duration/2 + 's',
// 		animationDelay: duration + 's'
// 	}} className={className}>
// 		<code>
// 			{children}
// 		</code>
// 	</SxSC>
// );

const Pre = forwardRef<HTMLPreElement,
	{children: ReactNode, className: string, duration: number}>
	(({ children, className, duration }, ref) => {
		return (
			<SxSC ref={ref} as='pre' $sx={{
				animationDuration: duration/2 + 's',
				animationDelay: duration + 's'
			}} className={className}>
				<code>
					{children}
				</code>
			</SxSC>
		);
	});

Pre.displayName = 'Pre';

