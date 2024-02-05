import s from './Button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { createClassName } from '@/app/components/shared/utils';
import { rajdhani } from '@/app/theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export enum ButtonClrVariation {
	standard,
	alternative,
	chosen,
	chosenByLink
}

const Button = ({ children, colorVariation = 0, link, blank, ...props }:
	{children: ReactNode, colorVariation?: ButtonClrVariation,link?: string, blank?: boolean}
	& Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	& HTMLAttributes<HTMLAnchorElement>, 'className' | 'ref'>) => {

	const inner =
		<>
			<div className={s.border} />
			<div className={s.inner}>
				<p className={s.text}>{children}</p>
			</div>
		</>;

	const pathname = usePathname();
	const current = pathname === link;

	const variation = (() => {
		switch (colorVariation) {
		case ButtonClrVariation.standard: return s.main;
		case ButtonClrVariation.alternative: return s.alternative;
		case ButtonClrVariation.chosen: return s.chosen;
		case ButtonClrVariation.chosenByLink: return current ? s.chosen : s.main;
		}
	})();

	const wrapperClassName = createClassName(s.wrapper, rajdhani, variation);

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
