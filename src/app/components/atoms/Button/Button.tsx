import s from './Button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { createClassName } from '@/app/components/shared/utils';
import { rajdhani } from '@/app/theme';
import Link from 'next/link';

const Button = ({ children, anotherColorVariation, link, blank, ...props }:
	{children: ReactNode, anotherColorVariation?: boolean, link?: string, blank?: boolean}
	& Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	& HTMLAttributes<HTMLAnchorElement>, 'className' | 'ref'>) => {

	const inner =
		<>
			<div className={s.border} />
			<div className={s.inner}>
				<p className={s.text}>{children}</p>
			</div>
		</>;

	const wrapperClassName = createClassName(s.wrapper, rajdhani,
		anotherColorVariation ? s.alternative : s.main);

	return !link ?
		<button className={wrapperClassName} {...props}>
			{inner}
		</button>
		:
		<Link href={link} {...props}
			target={blank ? '_blank' : undefined} className={wrapperClassName}>
			{inner}
		</Link>;
};

export default Button;
