import s from './StatusPipeline.module.scss';
import StatusQuality from '@/app/components/molecules/StatusQuality/StatusQuality';
import Marquee from '@/app/components/molecules/Marquee/Marquee';

const StatusPipeline = () => {
	return (
		<div className={s.pipeline}>
			<StatusQuality />
			<div className={s.breach}>
				<h4>MACHINE BREACH PIPELINE</h4>
				<div className={s.breachPipelineWrapper}>
					<Marquee duration={7}>
						<article className={s.breachPipeline}>
							<p>&#47;&#47;ROOT</p>
							<p>&#47;&#47;ACCESS_REQUEST</p>
							<p>&#47;&#47;ACCESS_REQUEST_SUCCESS</p>
							<p>&#47;&#47;COLLECTING_PACKET_1........................COMPLETE</p>
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
		</div>
	);
};

export default StatusPipeline;