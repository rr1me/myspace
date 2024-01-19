'use client';

import s from './LineLink.module.scss';
import Link from 'next/link';
import { rajdhani } from '@/app/theme';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

const LineLink = ({ href, children, ...props }:
	Record<'href' | 'children', string> & HTMLAttributes<HTMLAnchorElement>) => {
	const pathname = usePathname();
	const current = pathname === href;

	return (
		<Link {...props} href={href} className={clsx({
			[rajdhani]: true,
			[s.lineLink]: true,
			[s.current]: current
		})}>
			<p className={s.linkText}>
				{children}
			</p>
			<div className={s.linkTab} />
		</Link>
	);
};

export default LineLink;
