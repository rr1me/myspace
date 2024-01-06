import s from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const Button = ({ children, className, ...props }:
	{children: ReactNode, className?: string}
	& Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) =>
	(
		<button className={!className ? s.button : className} {...props}>
			{children}
		</button>
	);

export default Button;
