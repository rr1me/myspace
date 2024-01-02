import s from './Status.module.scss';
import { createClassName, getRandomInt } from '@/app/components/shared/utils';
import { orbitron } from '@/app/theme';
import StatusPipeline from '@/app/components/molecules/StatusPipeline/StatusPipeline';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const Status = () => {
	return (
		<div className={createClassName(s.status, orbitron.className)}>
			<article className={s.top}>
				<SelfWritingText nixWrapped={false} delay={2000}>0.000000@D&ensp;&ensp;PPMGRO(HIGH)&ensp;&ensp;
					:0X7ADD00D0 - 0X7DDD00D0 (998 MiB)</SelfWritingText>
				<SelfWritingText nixWrapped={false} className={s.topRight} delay={2000}>
					34 25&emsp;DT MNS&emsp;82.1&emsp;MLZ.X&emsp;&emsp;1.27</SelfWritingText>
			</article>
			<div className={s.trio}>
				<div className={s.listn}>

					<div className={s.listnTagWrapper}>
						<div className={s.listnTagInner}>
							<article className={createClassName(s.listnTag, s.textBox)}>
								<p>LISTn_INST_666</p>
							</article>
						</div>
					</div>

					<div className={s.listnStateWrapper}>
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

				</div>
				<div className={s.separatorWrapper}>
					<div className={s.clippedSeparator} />
				</div>
				<div className={s.stream}>
					<div className={s.streamTag}>
						<SelfWritingText nixWrapped={false}>DATA STREAM</SelfWritingText>
						<div className={s.loadingWrapper}>
							<SxSC $sx={{
								animationDelay: '200ms'
							}} className={s.loadingTab}/>
							<SxSC $sx={{
								animationDelay: '400ms'
							}} className={s.loadingTab}/>
							<SxSC $sx={{
								animationDelay: '600ms'
							}} className={s.loadingTab}/>
						</div>
					</div>

					<div className={s.bitArrMarquee}>
						<Marquee duration={5}>
							<div className={s.bitArr}>
								{Array(180).fill(0).map((_, i) => <p key={i}>{getRandomInt(0, 1)}</p>)}
							</div>
						</Marquee>
					</div>
				</div>
				<StatusPipeline />
			</div>
		</div>
	);
};

export default Status;
