import s from './StatusPipeline.module.scss';
import StatusQuality from '@/app/components/molecules/StatusQuality/StatusQuality';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import { createClassName } from '@/app/components/shared/utils';
import { orbitron } from '@/app/theme';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const StatusPipeline = ({ elementDelay }: {elementDelay: number}) => {
	return (
		<div className={s.wrapper}>
			<SxSC $sx={{
				animationDelay: elementDelay + 5500 + 'ms'
			}} className={s.pipeline}>
				<StatusQuality />
				<div className={s.breachWrapper}>
					<div className={s.breach}>
						<h4>MACHINE BREACH PIPELINE</h4>
						<div className={s.breachPipelineWrapper}>
							<Marquee duration={7} delay={elementDelay / 1000 + 6}>
								<article className={createClassName(s.breachPipeline, orbitron)}>
									<p>&#47;&#47;ROOT</p>
									<p>&#47;&#47;ACCESS_REQUEST</p>
									<p>&#47;&#47;ACCESS_REQUEST_SUCCESS</p>
									<p>&#47;&#47;COLLECTING_PACKET_1..........................COMPLETE</p>
									<p>&#47;&#47;COLLECTING_PACKET_2........................COMPLETE</p>
									<p>&#47;&#47;COLLECTING_PACKET_3........................COMPLETE</p>
									<p>&#47;&#47;COLLECTING_PACKET_4........................COMPLETE</p>
									<p>&#47;&#47;LOGIN</p>
									<p>&#47;&#47;LOGIN_SUCCESS</p>
									<p>&#47;&#47;UPLOAD_IN_PROGRESS</p>
									<p>&#47;&#47;UPLOAD_COMPLETE</p>
								</article>
							</Marquee>
						</div>
					</div>
					<div className={s.tab}/>
				</div>
			</SxSC>
		</div>
	);
};

export default StatusPipeline;
