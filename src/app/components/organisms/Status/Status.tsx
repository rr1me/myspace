import s from './Status.module.scss';
import { createClassName } from '@/app/components/shared/utils';
import { orbitron } from '@/app/theme';
import StatusPipeline from '@/app/components/molecules/StatusPipeline/StatusPipeline';

const Status = () => {
	return (
		<div className={createClassName(s.status, orbitron.className)}>
			<article className={s.top}>
				<span>0.000000@D&ensp;&ensp;PPMGRO(HIGH)&ensp;&ensp;
					:0X7ADD00D0 - 0X7DDD00D0 (998 MiB)</span>
				<span className={s.topRight}>34 25&emsp;DT MNS&emsp;82.1&emsp;MLZ.X&emsp;&emsp;1.27</span>
			</article>
			<div className={s.trio}>
				<div className={s.listn}>
					<article className={createClassName(s.listnTag, s.textBox)}>
						<p>LISTn_INST_666</p>
					</article>
					<div className={s.listnState}>
						<div className={s.volts}>
							<div className={createClassName(s.cm3, s.textBox)}>CM3+</div>
							<span>1.12V</span>
						</div>
						<div>
							<div>TIME 10.08 MS</div>
							<div>0+60.66 MS</div>
						</div>
					</div>
				</div>
				<div className={s.clippedSeparator} />
				<div className={s.stream}>
					<div className={s.streamTag}>
						<p>DATA STREAM</p>
						<div className={s.loadingWrapper}>
							<div className={s.loadingTab}/>
							<div className={s.loadingTab}/>
							<div className={s.loadingTab}/>
						</div>
					</div>

					<div className={s.bitArr}>
						{Array(180).fill(<p>1</p>)}
					</div>
				</div>
				<StatusPipeline/>
			</div>
		</div>
	);
};

export default Status;
