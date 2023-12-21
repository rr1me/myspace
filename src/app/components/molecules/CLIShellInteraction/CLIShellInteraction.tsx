import s from './CLIShellInteraction.module.scss';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { katakana } from '@/app/components/shared/utils';

const CLIShellInteraction = () => {
	return (
		<div className={s.interaction}>
			<div className={s.cmdZone}>
				<div>
					<span className={s.nixPreCmd}>:~$</span>
					<SelfWritingText>
						ne text?
					</SelfWritingText>
				</div>
				<div>
					<span className={s.nixPreCmd}>:~$</span>
					<SelfWritingText>
						AHAHASHDASJKFHA
					</SelfWritingText>
				</div>
				<div>
					<span className={s.nixPreCmd}>:~$</span>
					<SelfWritingText>
						ABOBA
					</SelfWritingText>
				</div>
				<div>
					<span className={s.nixPreCmd}>:~$</span>
					<SelfWritingText>
						{katakana.slice(0, 10).join('')}
					</SelfWritingText>
					<span className={s.nixTab} />
				</div>
			</div>

			<div className={s.codeZone}>

			</div>
		</div>
	);
};

export default CLIShellInteraction;
