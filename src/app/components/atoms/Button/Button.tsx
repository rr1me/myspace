import s from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

const Button = ({ children, className, ...props }:
	{children: ReactNode, className?: string} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) => {

	const classNames = clsx({
		[s.button]: true,
		[className!]: !!className,
	});

	return (
		<button className={classNames} {...props}>
			{children}
		</button>
	);
};

export default Button;
