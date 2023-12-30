import s from './LoadingLog.module.scss';
import { orbitron } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';

const LoadingLog = () =>
	(
		<div className={s.element}>
			<div className={s.square} />

			<article className={createClassName(s.protocol, orbitron.className)}>
				<p>success ui loading</p>
				<p>-CONNECTION ESTABLISHED</p>
				<p>-ENGAGED PROTOCOL C350Q010</p>
				<p>-tf65 success</p>
				<p>no errors</p>
			</article>

			<article className={createClassName(s.timings, orbitron.className)}>
				<p className={s.timing}>3.25604 0 . 4&nbsp;&nbsp;&nbsp;4</p>
				<p className={s.timing}>0.93743 0 . 4&nbsp;&nbsp;4 5 2</p>
				<p className={s.timing}>0.93743 0 . 4&nbsp;&nbsp;4 5 2</p>
			</article>

			<article className={createClassName(s.digits, s.timings, orbitron.className)}>
				<p className={s.timing}>2</p>
				<p className={s.timing}>4</p>
				<p className={s.timing}>1</p>
			</article>
		</div>
	);

export default LoadingLog;
