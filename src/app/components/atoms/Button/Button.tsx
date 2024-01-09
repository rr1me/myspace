import s from './Button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { createClassName } from '@/app/components/shared/utils';
import { rajdhani } from '@/app/theme';
import Link from 'next/link';

const Button = ({ children, anotherColorVariation, link, ...props }:
	{children: ReactNode, anotherColorVariation?: boolean, link?: string}
	& Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'>) => {

	const inner =
		<>
			<div className={s.border} />
			<div className={s.inner}>
				<p className={s.text}>{children}</p>
			</div>
		</>

	const wrapperClassName = createClassName(s.wrapper, rajdhani,
		anotherColorVariation ? s.alternative : s.main);

	return !link ?
		<button className={wrapperClassName} {...props}>
			{inner}
		</button>
		:
		<Link href={link} target='_blank' className={wrapperClassName}>
			{inner}
		</Link>
};

export default Button;
