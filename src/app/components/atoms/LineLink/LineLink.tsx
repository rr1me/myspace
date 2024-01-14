'use client';

import s from './LineLink.module.scss';
import Link from 'next/link';
import { rajdhani } from '@/app/theme';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const LineLink = ({ href, children }: Record<'href' | 'children', string>) => {
	const pathname = usePathname();
	const current = pathname === href;

	return (
		<Link href={href} className={clsx({
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
