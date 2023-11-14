'use client';

import s from './RedMovingCode.module.scss';
import useRandomCode from '@/app/components/blocks/RedMovingCode/useRandomCode';

const RedMovingCode = () => { //2300 width?

	const getCode = useRandomCode();

	return (
		<div className={s.movingCode}>
			{Array(6).fill(0).map((x, i) =>
				<CodeElement key={i} code={getCode()}/>)}
		</div>
	);
};

export default RedMovingCode;

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
