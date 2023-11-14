'use client';

import s from './Marquee.module.scss';
import useRandomCode from '@/app/components/elements/Marquee/useRandomCode';

const Marquee = () => { //2300

	const getCode = useRandomCode();

	return (
		<div className={s.movingCode}>
			{Array(6).fill(0).map((x, i) =>
				<CodeElement key={i} code={getCode()}/>)}
		</div>
	);
};

export default Marquee;

const CodeElement = ({ code }: {code: string}) =>
	(
		<div className={s.codeElement}>
			<pre className={s.anim}>
				<code>
					{code}
				</code>
			</pre>
			<pre className={s.anim}>
				<code>
					{code}
				</code>
			</pre>
		</div>
	);
