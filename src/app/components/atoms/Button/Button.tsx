import s from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { createClassName } from '@/app/components/shared/utils';
import { rajdhani } from '@/app/theme';

const Button = ({ children, ...props }:
	{children: ReactNode}
	& Omit<ButtonHTMLAttributes<HTMLDivElement>, 'className'>) =>
	(
		<div className={createClassName(s.wrapper, rajdhani)}
				 {...props}>
			<div className={s.border}/>
			<div className={s.inner}>
				<p className={s.text}>{children}</p>
			</div>
		</div>
	);

export default Button;
