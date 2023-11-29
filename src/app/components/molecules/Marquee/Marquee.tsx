import s from './Marquee.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

const Marquee = ({ children, horizontal }: {children: ReactNode, horizontal?: boolean}) => {

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

	return (
		<div className={classNameWrapper}>
			<pre className={classNamePre}>
				<code>
					{children}
				</code>
			</pre>
			<pre className={classNamePre}>
				<code>
					{children}
				</code>
			</pre>
		</div>
	);
};

export default Marquee;
